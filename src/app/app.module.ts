/**
 * Core
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Services
 */
import { ProductsService } from './services/products.service';
import { CategoryService } from './services/category.service';
/**
 * Components
 */
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
/**
 * Main Component
 */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    ProductListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductsService,
    CategoryService
  ],
  exports: [
    ProductListComponent,
    CategoryListComponent
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
