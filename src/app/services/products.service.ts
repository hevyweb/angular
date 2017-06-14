import {Injectable} from '@angular/core';
import {Product} from "../models/product";

@Injectable()
export class ProductsService {
    public getProducts(){
        return [
            new Product(
                'Kidorable Lucky Cat Towel',
                'Web exclusive! Whether you\'re drying off after a bath or at the pool, this fun towel lets the imagination come alive. This Kidorable Lucky Cat Towel will make a real splash with your kid. Made with absorbent, soft cotton, this towel makes lounging by the pool and beach',
                39.00,
                2,
                true
            ),
            new Product(
                'Cheese Plane',
                'Create perfect, ready-to-eat slices of hard cheese with Pfaltzgraff Angled Cheese Planer. Pfaltzgraff designed its stainless steel blade at an angle to minimize surface tension, giving you a smoother slicing experience. Dishwasher safe. Features: -Reo.',
                14.99,
                1,
                false
            ),
            new Product(
                'Gopro Smart Remote',
                'GoPro Smart Remote. Control your GoPro Hero4, Hero3+, and Hero3 camera remotely with the GoPro Smart Remote. Usable from up to 600 feet (180m) away, this wearable, waterproof remote is perfect for gear mounted shots,',
                79.99,
                0,
                true
            ),
            new Product(
                'Dell',
                'Dell printer laser toner',
                114.77,
                1,
                false
            ),
            new Product(
                'Baby Trend EZ Bouncer - Pyramid',
                'The Baby Trend EZ Bouncer in Pyramid fashion is mom\'s best friend when it comes to soothing baby. This Bouncer is a cozy resting place for your little one with its comfy seat and removable headrest. ',
                300.00,
                2,
                true
            )
        ];
    }
}