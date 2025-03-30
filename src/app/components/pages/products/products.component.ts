import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) { }

  products: ProductType[] = [];

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/']).then();
      }
    })
  }

}
