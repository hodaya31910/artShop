import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productsInOrder } from '../models/productsInOrder';

@Injectable({
  providedIn: 'root'
})
export class ProductsInOrderService {
  url:string="http://localhost:37023//api/ProductsInOrder/";

  constructor(private http:HttpClient) { }
  Getall():Observable<productsInOrder[]>
  {
    return this.http.get<productsInOrder[]>(this.url+"GetAll")
  }
 
  AddProductToOrder(productsInOrder:productsInOrder):Observable<void>
  {
    return this.http.post<void>(this.url+"AddProduct/",productsInOrder);
  }
 
}
