import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
})
export class CartDetailComponent implements OnInit {
  emptyCart!: number;
  quantity$ = this.shoppingCartSvc.quantityAction$;

  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;
  constructor(
    private shoppingCartSvc: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onDeleteFromCart(product: Product, event: Event): void {
    event.preventDefault();
    let confirmacion = confirm('Are you sure you want to remove?');
    if (confirmacion) {
      this.shoppingCartSvc.removeProductFromCart(product);
    } else {
      return;
    }

    this.quantity$.subscribe((res: any) => {
      this.emptyCart = res;
    });

    if (this.emptyCart === 0) {
      alert('your cart is empty');
      this.router.navigate(['/merch']);
    } else {
      return;
    }
  }
}
