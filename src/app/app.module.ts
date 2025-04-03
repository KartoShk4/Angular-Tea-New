import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {ProductsModule} from "./views/products/products.module";
import {OrderModule} from "./views/order/order.module";
import {MainModule} from "./views/main/main.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
