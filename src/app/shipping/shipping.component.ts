import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  private cartService: CartService;
  private shippingRates;

  constructor(cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.shippingRates = this.cartService.getShippingRates();
  }

  public getShippingRates() {
    return this.shippingRates;
  }

}
