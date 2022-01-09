import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in-register',
  templateUrl: './log-in-register.component.html',
  styleUrls: ['./log-in-register.component.css']
})
export class LogInRegisterComponent implements OnInit {
  showLogIn:boolean=true;
  showRegister:boolean=false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor() { }

  ngOnInit() {
  }
old(){
  this.showLogIn=false
  this.showRegister=true
}
newuser(){
this.showLogIn=true
this.showRegister=false
}


}
