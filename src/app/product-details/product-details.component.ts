import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => {
      let productId: number = parseInt(parameters.get("productId"));
      console.log("Product id is " + productId);
      this.product = products.find(prod => prod.id === productId);
      console.log("Product: " + this.product.toString());
    })
  }

}
