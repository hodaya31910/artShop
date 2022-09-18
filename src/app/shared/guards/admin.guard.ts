import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import {AuthService} from '../services/auth.service';


@Injectable()
export class AdminGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): boolean {
    const user = this.authService.getUser();
    if (!user.isAdmin) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
