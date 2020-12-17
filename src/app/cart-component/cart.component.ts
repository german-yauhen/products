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

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit(): void {
  }

  public getProductItems(): Product[] {
    return this.cartService.getItems();
  }

  public cleanCart(): Product[] {
    return this.cartService.clearCart();
  }

}
