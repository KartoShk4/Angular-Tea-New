import { Component, OnInit } from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType = {} as ProductType;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private productService: ProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: '',
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.productService.getProduct(+params['id']).subscribe({
          next: (data: ProductType[]): void => {
            this.product = data[0];
          },
          error: (error): void => {
            this.router.navigate(['/']);
          }
        });
      }
    });
  }
}
