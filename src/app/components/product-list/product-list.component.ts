import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { CategoryService } from '../../services/category.service';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

@Injectable()

export class ProductListComponent implements OnInit {

  @Output() buy: EventEmitter<Product> = new EventEmitter();

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

  addToCart(product) {
      alert('added to cart');
      this.buy.emit(product);
  }

}
