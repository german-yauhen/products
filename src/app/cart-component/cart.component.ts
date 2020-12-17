import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartService: CartService;

  productItems: Product[];

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.productItems = this.cartService.getItems();
  }

  public getProductItems(): Product[] {
    return this.productItems;
  }

  public size(): number {
    return this.productItems.length;
  }

}
