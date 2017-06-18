import { Component, OnInit, Injectable } from '@angular/core';
import { ProductsService } from "../services/products.service";
import { CategoryService } from '../services/category.service';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

@Injectable()

export class ProductListComponent implements OnInit {

    products: Product[];
    
    categories: Category[];

  constructor(
        private productService: ProductsService,
        private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.products = this.productService.getProducts();
  }

}
