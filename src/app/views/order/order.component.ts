import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public orderSuccess: boolean = false;

  public formValues = {
    name: '',
    last_name: '',
    phone: '',
    country: '',
    zip: '',
    product: '',
    address: '',
    comment: '',
  }

  checkoutForm = this.fb.group({
    product: [''],
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZА-Яа-яЁё]+$/)]],
    secondName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZА-Яа-яЁё]+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?\d{11}$/)]],
    country: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9А-Яа-яЁё\s\-\/]+$/)]],
    comment: [''],
  });

  constructor(private fb: FormBuilder,private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  private subscriptions: Subscription | null = null;
  private subscriptionsOrder: Subscription | null = null;

  ngOnInit(): void {
    this.subscriptions = this.activatedRoute.queryParams.subscribe((params): void => {
      if (params['product']) {
        this.formValues.product = params['product'];
        this.checkoutForm.patchValue({
          product: params['product']
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions?.unsubscribe();
    this.subscriptionsOrder?.unsubscribe();
  }

  submitForm(): void {
    if (!this.checkoutForm.value.product) {
      return;
    }
    if (this.checkoutForm.valid) {
      this.createOrder();
    } else {
      console.log('Форма содержит ошибки');
    }
  }


  public createOrder() {
    const formData = this.checkoutForm.value;
    this.subscriptionsOrder = this.productService.createOrder({
      name: formData.firstName,
      last_name: formData.secondName,
      phone: formData.phone,
      country: formData.country,
      zip: formData.zip,
      product: formData.product || this.formValues.product,
      address: formData.address,
      comment: formData.comment,
    }).subscribe(response => {
      if (response.success) {
        console.log('Заказ успешно создан');
        this.checkoutForm.reset();
        this.checkoutForm.patchValue({
          product: ''
        });
        this.orderSuccess = true;
      } else {
        console.log('Ошибка при создании заказа', response.message);
      }
    });
  }
}
