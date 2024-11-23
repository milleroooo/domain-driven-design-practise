import { Component, ContentChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBridge } from '../product.interface';
import { PRODUCT_TOKEN } from '../product.token';

@Component({
  selector: 'shared-ui-template-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-product-card.component.html',
  styleUrl: './template-product-card.component.css',
})
export class TemplateProductCardComponent implements  OnInit{
  @ContentChild(PRODUCT_TOKEN as any, {static: true})
  product!: ProductBridge

  ngOnInit(): void {
    this.product?.getProduct();
  }

  onAddToFav() {
    this.product.addToFavorites();
  }

  onAddToCart() {
    this.product.addToCart();
  }

  onRemoveFromCart() {
    this.product.removeFromCart();
  }
}
