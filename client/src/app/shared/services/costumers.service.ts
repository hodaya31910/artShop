import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { costumer } from '../models/costumer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumersService {
  curentcostumer:costumer;
  url:string="http://localhost:37023//api/Costumer/";

  constructor(private http:HttpClient) { }
  GetCostumerBuyId(id:string):Observable<costumer>
  {
    return this.http.get<costumer>(this.url+"GetCostumerBuyId/"+id)
  }
  addCostumer(costumer:costumer):Observable<void>
  {
    return this.http.post<void>(this.url+"AddCostumer/",costumer);
  }
  
  updateCostumer(costumer:costumer):Observable<costumer>
  {
    return this.http.put<costumer>(this.url+"update",costumer);
  }
  deleteClases(id:string):Observable<costumer>
  {
    return this.http.delete<costumer>(this.url+"Delete/"+id);
  }
}
