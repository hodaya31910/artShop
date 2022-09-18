import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/products.model';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.GetAll().subscribe(response => { this.products = response;
                                                          console.log(this.products);
    });
  }

}
