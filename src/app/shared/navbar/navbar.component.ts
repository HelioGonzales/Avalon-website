import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  emptyCart!: number;
  quantity$ = this.shoppingCartSvc.quantityAction$;
  constructor(
    private router: Router,
    private shoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 50) {
        nav?.classList.add('menu-nav', 'shadow');
      } else {
        nav?.classList.remove('menu-nav', 'shadow');
      }
    });

    this.quantity$.subscribe((res: any) => {
      this.emptyCart = res;
      if (this.emptyCart === 0) {
        document.querySelector('app-cart')?.classList.remove('mouseHover');
      } else {
        document.querySelector('app-cart')?.classList.add('mouseHover');
      }
    });
  }

  goToCheckout(): void {
    if (this.emptyCart !== 0) {
      this.router.navigate(['/checkout']);
    } else {
      return;
    }
  }
}
