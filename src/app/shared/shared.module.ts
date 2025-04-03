import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ],
})
export class SharedModule { }
