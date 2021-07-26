import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
})
export class CartDetailComponent implements OnInit {
  total$ = this.shopingCartSvc.totalAction$;
  cart$ = this.shopingCartSvc.cartAction$;
  constructor(private shopingCartSvc: ShoppingCartService) {}

  ngOnInit(): void {}
}
