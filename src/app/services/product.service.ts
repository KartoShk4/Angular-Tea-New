import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../components/types/product.type";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  }

  getProduct(id: number): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`https://testologia.ru/tea/${id}`);
  }

  createOrder(data: {
    name: string | null | undefined;
    last_name: string | null | undefined;
    phone: string | null | undefined;
    country: string | null | undefined;
    zip: string | null | undefined;
    product: string;
    address: string | null | undefined;
    comment: string | null | undefined
  }) {
    return this.http.post<{success:boolean, message?: string}>(`https://testologia.ru/order-tea`, data);
  }
}
