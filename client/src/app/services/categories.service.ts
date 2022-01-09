import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categories } from '../classes/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url:string="http://localhost:37023//api/Categories/";

  constructor(private http:HttpClient) { }
  GetallCategories():Observable<categories[]>
  {
    return this.http.get<categories[]>(this.url+"GetAllCategories")
  }
}
