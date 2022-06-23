import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavModule } from '../components/nav/nav.module';
import { FooterModule } from '../components/footer/footer.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent, ],
  imports: [
    CommonModule, FooterModule,
    RouterModule, NavModule, HomeRoutingModule
  ],
})
export class HomeModule { }
