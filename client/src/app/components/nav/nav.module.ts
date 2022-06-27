import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav.component';
import {RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, RouterModule, MatMenuModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
