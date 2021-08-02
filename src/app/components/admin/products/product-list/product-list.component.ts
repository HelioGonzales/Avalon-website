import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/core/services/product-services.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product$ = this.productSvc.product;

  constructor(
    private productSvc: ProductServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onGoToEdit(product: Product): void {
    const navigationExtras: NavigationExtras = {
      state: { value: product },
    };
    this.router.navigate(['/admin/edit-product'], navigationExtras);
  }

  onGoToDetail(product: Product): void {
    const navigationExtras: NavigationExtras = {
      state: { value: product },
    };
    this.router.navigate(['/admin/product-detail'], navigationExtras);
  }

  async onGoToDelete(productId: any): Promise<void> {
    const confirmacion = confirm('are you sure you want to delete it?');
    if (confirmacion) {
      try {
        await this.productSvc.onDeleteProduct(productId);
        alert('deleted');
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  }
}
