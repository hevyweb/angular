import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    title = 'Dmytro Dzyuba angulat application.';
    public cart: any[];

    constructor(){
        this.cart = [];
    }

    openCart(){
        console.log('cart opened');
    }
}