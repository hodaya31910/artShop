import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {MatTableModule} from '@angular/material/table';


const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, RouterModule, CommonModule, RouterModule.forChild(routes), MatTableModule,

  ]
})
export class DashboardModule { }
