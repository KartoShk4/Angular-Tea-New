import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  checkoutForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZА-Яа-яЁё]+$/)]],
    secondName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZА-Яа-яЁё]+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?\d{11}$/)]],
    country: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    address: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9А-Яа-яЁё\s\-\/]+$/)]],
  });

  constructor(private fb: FormBuilder) {
  }

  submitForm() {
    if (this.checkoutForm.valid) {
      console.log('Форма успешно отправлена', this.checkoutForm.value);
    } else {
      console.log('Форма содержит ошибки');
    }
  }
}
