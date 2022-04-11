import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../modules/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string="http://localhost:37023//api/Products/";
  productsInCart: Array<products>;

  constructor(private http:HttpClient) { }
  Getall():Observable<products[]>
  {
    return this.http.get<products[]>(this.url+"GetAll")
  }
  GetProductsByCodeCategory(id:number):Observable<products>
  {
    return this.http.get<products>(this.url+"GetProductsByCodeCategory/"+id)
  }
  AddProduct(products:products):Observable<void>
  {
    return this.http.post<void>(this.url+"AddProduct/",products);
  }
  
  updateOrder(products:products):Observable<products>
  {
    return this.http.put<products>(this.url+"update",products);
  }
  deleteClases(id:string):Observable<products>
  {
    return this.http.delete<products>(this.url+"Delete/"+id);
  }
}
