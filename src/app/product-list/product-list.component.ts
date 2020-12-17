import { Component } from "@angular/core";
import { Product, products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products: Product[] = products;

  share() {
    let msg: string = "The product has been shared!";
    window.alert(msg);
    console.log(msg);
  }

  onNotify(itemName: string) {
    window.alert("You will be notified when " + itemName + " goes on sale!");
  }
}
