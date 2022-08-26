import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { orders } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  url:string="http://localhost:37023//api/Orders/";

  constructor(private http:HttpClient) { }
  GetOrderBuyId(id:string):Observable<orders>
  {
    return this.http.get<orders>(this.url+"GetOrderBuyId/"+id)
  }
  addOrder(orders:orders):Observable<void>
  {
    return this.http.post<void>(this.url+"AddOrder/",orders);
  }
  
  updateOrder(orders:orders):Observable<orders>
  {
    return this.http.put<orders>(this.url+"update",orders);
  }
  
}
