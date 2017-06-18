import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { ProductsService } from './services/products.service';
//import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { CategoriesModule } from './modules/categories.module';

@NgModule({
  declarations: [
    CategoriesModule,
    AppComponent
    //ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
