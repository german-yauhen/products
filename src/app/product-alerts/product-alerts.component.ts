import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Product } from "../products";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  notify: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log("product-alerts component initialized...");
  }
}