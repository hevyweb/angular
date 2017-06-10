import {Component, Injectable} from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Dmytro Dzyuba angulat application.';
  categories = [
      'carrot',
      'tomato',
      'potato',
  ];

  products = [
      {
          name: 'Kidorable Lucky Cat Towel',
          description: 'Web exclusive! Whether you\'re drying off after a bath or at the pool, this fun towel lets the imagination come alive. This Kidorable Lucky Cat Towel will make a real splash with your kid. Made with absorbent, soft cotton, this towel makes lounging by the pool and beach',
          price: 39.00,
          category: 2,
          isAvailable: true
      },
      {
          name: 'Cheese Plane',
          description: 'Create perfect, ready-to-eat slices of hard cheese with Pfaltzgraff Angled Cheese Planer. Pfaltzgraff designed its stainless steel blade at an angle to minimize surface tension, giving you a smoother slicing experience. Dishwasher safe. Features: -Reo.',
          price: 14.99,
          category: 1,
          isAvailable: false
      },
      {
          name: 'Gopro Smart Remote',
          description: 'GoPro Smart Remote. Control your GoPro Hero4, Hero3+, and Hero3 camera remotely with the GoPro Smart Remote. Usable from up to 600 feet (180m) away, this wearable, waterproof remote is perfect for gear mounted shots,',
          price: 79.99,
          category: 0,
          isAvailable: true
      },
      {
          name: 'Dell',
          description: 'Dell printer laser toner',
          price: 114.77,
          category: 1,
          isAvailable: false
      },
      {
          name: 'Baby Trend EZ Bouncer - Pyramid',
          description: 'The Baby Trend EZ Bouncer in Pyramid fashion is mom\'s best friend when it comes to soothing baby. This Bouncer is a cozy resting place for your little one with its comfy seat and removable headrest. ',
          price: 300.00,
          category: 2,
          isAvailable: true
      }
  ];
}

import { Product } from './app.model';


@Injectable()
export class ProductsService {
    public  getProducts(){
        return [//?????????????
        ];
    }
}