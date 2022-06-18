import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavModule } from '../../components/nav/nav.module';
import { FooterModule } from '../../components/footer/footer.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,FooterModule,
    RouterModule,NavModule,
  ],
})
export class HomeModule { }
