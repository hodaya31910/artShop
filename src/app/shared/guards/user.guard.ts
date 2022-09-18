import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class UserGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean {
    if (!this.authService.getUser()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
