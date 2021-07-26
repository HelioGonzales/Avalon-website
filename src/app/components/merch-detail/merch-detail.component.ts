import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MerchServiceService } from 'src/app/core/services/merch-service.service';

import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-merch-detail',
  templateUrl: './merch-detail.component.html',
  styleUrls: ['./merch-detail.component.css'],
})
export class MerchDetailComponent implements OnInit {
  productId: any;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private merchSvc: MerchServiceService,
    private shoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param.has('id')) {
        // console.log('valid id');

        this.productId = param.get('id');
      }

      this.merchSvc.getProduct(this.productId).subscribe((product: Product) => {
        // console.log(product);
        this.product = product;
      });
    });
  }

  addToCart(product: Product): void {
    // console.log('add to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }
}
