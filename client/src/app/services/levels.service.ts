import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { levels } from '../modules/levels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {
  url:string="http://localhost:37023//api/levels/";

  constructor(private http:HttpClient) { }
  GetallCategories():Observable<levels[]>
  {
    return this.http.get<levels[]>(this.url+"GetLevels")
  }
}
