import { Injectable } from '@angular/core';
import { Product } from './products'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productItems: Product[] = [];

  constructor() {}

  public addToCart(product: Product): void {
    if (!product) {
      throw new Error("A nullable object is transfered!")
    }
    this.productItems.push(product);
  }

  public getItems(): Product[] {
    return this.productItems;
  }

  public clearCart(): Product[] {
    this.productItems = [];
    return this.productItems;
  }
}
