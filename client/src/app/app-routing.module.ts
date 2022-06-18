import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { LogInRegisterComponent } from './log-in-register/log-in-register.component';
import { ShopingComponent } from './shoping/shoping.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeModule } from './pages/home/home.module';


const routes: Routes = [
  //  public routes
  { path: 'home',  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {path:"contact",component:ContactComponent},
  {path:"logIn",component:LogInRegisterComponent},
  {path:"shoping",component:ShopingComponent},
  {path:"cart",component:CartComponent},
  {path:"payment",component:PaymentComponent},
  { path: '**', redirectTo: 'home' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
