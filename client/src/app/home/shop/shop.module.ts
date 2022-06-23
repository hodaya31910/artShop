import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ShopComponent },
  // { path: 'new', loadChildren: () => import('./employee-new/new-employee.module').then(m => m.NewEmployeeModule) },
  // { path: ':id', loadChildren: () => import('./employee-view/employee-view.module').then(m => m.EmployeeViewModule) }
];


@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,    RouterModule.forChild(routes),

  ]
})
export class ShopModule { }
