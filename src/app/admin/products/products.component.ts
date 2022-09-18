import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ['id', 'name', 'amount', 'price', 'details', 'title', 'image', 'category'];
  constructor(private  productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.GetAll().subscribe(products => this.products = products);
  }

}
