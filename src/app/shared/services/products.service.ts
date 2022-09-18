import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/products.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:4000/products/';
  productsInCart: Array<Product>;

  constructor(private http: HttpClient) { }
  GetAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'getAllProducts');
  }
  GetProductsByCodeCategory(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + 'GetProductsByCodeCategory/' + id);
  }
  AddProduct(product: Product ): Observable<void> {
    return this.http.post<void>(this.url + 'AddProduct/', product);
  }

}
