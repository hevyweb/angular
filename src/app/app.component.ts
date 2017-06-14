import {Component, OnInit} from '@angular/core';
import {ProductsService} from "./services/products.service";
import {Product} from './models/product';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    title = 'Dmytro Dzyuba angulat application.';

    products: Product[];

    categories = [
        'carrot',
        'tomato',
        'potato',
    ];

    constructor(
        private service: ProductsService
    ){ }

    ngOnInit(){
        this.products = this.service.getProducts();
    }
}