import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NavModule } from '../shared/components/nav/nav.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'shop', loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule) },
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
      { path: 'cart', loadChildren: () => import('../cart/cart.module').then(m => m.CartModule) },
      { path: 'contact', loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
      { path: 'login', loadChildren: () => import('../log-in-register/log-in-register.module').then(m => m.LogInRegisterModule) },
      // { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
    ]
  }
];


@NgModule({
  declarations: [PublicComponent],
  imports: [
      CommonModule, FooterModule,
    RouterModule, NavModule, RouterModule.forChild(routes),
  ]
})
export class PublicModule { }
