import { Component, OnInit } from '@angular/core';
import { products } from '../shared/models/products.model';
import { ProductsService } from '../shared/services/products.service';
import { CategoriesService } from '../shared/services/categories.service';
import { LevelsService } from '../shared/services/levels.service';
import { categories } from '../shared/models/categories.model';
import { levels } from '../shared/models/levels.model';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css']
})
export class ShopingComponent implements OnInit {
  products: Array<products>
  categories: Array<categories>
  levels: Array<levels>
choos:categories;
  constructor(private ProductsService:ProductsService,private categoriesService:CategoriesService,LevelsService:LevelsService) { }

  ngOnInit() {
    // this.ProductsService.Getall().subscribe(data => {this.products = data;});

    // this.categoriesService.GetallCategories().subscribe(data => {this.categories = data;});
  }
addToCart(p){
  this.ProductsService.productsInCart.push(p)
}
}
