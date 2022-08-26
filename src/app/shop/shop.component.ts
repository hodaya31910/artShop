import { Component, OnInit } from '@angular/core';
import { products } from '../shared/models/products.model';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
products: products[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.Getall().subscribe(response => { this.products = response;
                                                          console.log(this.products);
    })
  }

}
