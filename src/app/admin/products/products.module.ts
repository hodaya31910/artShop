import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from "@angular/material/button";



const routes: Routes = [
  { path: '', component: ProductsComponent },
];

@NgModule({
  declarations: [ProductsComponent],
    imports: [
        CommonModule, RouterModule, CommonModule, RouterModule.forChild(routes), MatTableModule, MatPaginatorModule, MatButtonModule,

    ]
})
export class ProductsModule { }
