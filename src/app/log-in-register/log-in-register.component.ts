import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-log-in-register',
  templateUrl: './log-in-register.component.html',
  styleUrls: ['./log-in-register.component.css']
})
export class LogInRegisterComponent implements OnInit {

  logInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.logInForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  ngOnInit() {
  }

  login() {
    if (this.logInForm.valid) {
      // this.authService.login(val.email, val.password)
      //   .subscribe(
      //     () => {
      //       console.log('User is logged in');
      //       this.router.navigateByUrl('/');
      //     }
      //   );
    }
  }


}
