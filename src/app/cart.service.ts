import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private httpClient: HttpClient;

  private productItems: Product[] = [];

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

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

  public getShippingRates() {
    return this.httpClient.get("../assets/shipping.json");
  }
}
