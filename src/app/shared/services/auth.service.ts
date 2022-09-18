import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }
  // login(email: string, password: string ) {
  //   return this.http.post<User>('/api/login', {email, password})
  //     .do(res => this.setSession)
  //     .shareReplay();
  // }

  // tslint:disable-next-line:new-parens
  loginStatus: Subject<boolean> = new Subject;
  // tslint:disable-next-line:new-parens
  userChanged = new Subject;

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('user');
  }

  login(user?: User): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.loginStatus.next(true);
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.loginStatus.next(false);
  }

  getUser(): any {
    if (sessionStorage.getItem('user')) {
      return JSON.parse(sessionStorage.getItem('user'));
    }

    return null;
  }

  getToken(): string {
    if (sessionStorage.getItem('user')) {
      return JSON.parse(sessionStorage.getItem('user')).token;
    }

    return null;
  }

  setUser(user: any): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.userChanged.next(true);
  }




}
