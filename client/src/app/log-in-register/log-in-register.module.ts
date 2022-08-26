import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LogInRegisterComponent} from './log-in-register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  { path: '', component: LogInRegisterComponent },
];

@NgModule({
  declarations: [LogInRegisterComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule, MatInputModule, MatButtonModule
  ]
})
export class LogInRegisterModule { }
