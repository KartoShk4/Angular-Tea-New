import {NgModule} from '@angular/core';
import {MainComponent} from "./main.component";
import {AppRoutingModule} from "../../app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [MainComponent],
  imports: [
    AppRoutingModule,
    NgbModule,
  ]
})
export class MainModule {
}
