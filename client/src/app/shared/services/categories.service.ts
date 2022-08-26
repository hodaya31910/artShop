import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'http://localhost:37023//api/Categories/';

  constructor(private http: HttpClient) { }
  GetAllCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.url + 'GetAllCategories')
  }
}
