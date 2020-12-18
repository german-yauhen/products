import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartService: CartService;
  private formBuilder; FormBuilder;

  private checkoutForm: FormGroup;

  constructor(cartService: CartService,
              formBuilder: FormBuilder) {
    this.cartService = cartService;
    this.formBuilder = formBuilder;

    this.checkoutForm = formBuilder.group(
      {
        name: '',
        address: ''
      }
    )
  }

  ngOnInit(): void {
  }

  public getCheckoutForm(): FormGroup {
    return this.checkoutForm;
  }

  public getProductItems(): Product[] {
    return this.cartService.getItems();
  }

  public cleanCart(): Product[] {
    return this.cartService.clearCart();
  }

  public onSubmitForm(customeData: {
    name: string, address: string
  }): void {
    this.cleanCart();
    this.checkoutForm.reset();
    window.alert("Your order has been submitted with the following shipping details: " + customeData.name + ", " + customeData.address)
  }

}
