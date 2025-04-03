import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {AppRoutingModule} from "../../app-routing.module";
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ProductsModule { }
