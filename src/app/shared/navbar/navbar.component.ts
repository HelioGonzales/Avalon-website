import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 50) {
        nav?.classList.add('menu-nav', 'shadow');
      } else {
        nav?.classList.remove('menu-nav', 'shadow');
      }
    });
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
