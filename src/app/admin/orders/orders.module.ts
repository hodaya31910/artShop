import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from './orders.component';



const routes: Routes = [
  { path: '', component: OrdersComponent },
];

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule, RouterModule,    CommonModule,    RouterModule.forChild(routes),

  ]
})
export class OrdersModule { }
