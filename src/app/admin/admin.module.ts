import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {NavModule} from '../shared/components/nav/nav.module';
import { SideNavComponent } from './shared/side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
      // { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'dashboard', 			loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    ]
  }
];

@NgModule({
  declarations: [AdminComponent, SideNavComponent],
  imports: [
    CommonModule, RouterModule, RouterModule.forChild(routes), NavModule,


  ]
})
export class AdminModule { }
