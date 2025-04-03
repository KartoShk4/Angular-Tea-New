import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {CartProductService} from "../services/cart-product.service";

@Component({
  selector: 'product-card-component',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent{

  @Input() product: any;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('elem')
  private elem!: ElementRef;

  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0,
    }
  }
}
