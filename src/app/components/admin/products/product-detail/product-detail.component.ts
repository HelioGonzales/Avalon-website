import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ProductServicesService } from 'src/app/core/services/product-services.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private router: Router,
    private productSvc: ProductServicesService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.product === 'undefined') {
      this.router.navigate(['/admin/product-list']);
    }
  }

  onGoToEdit(): void {
    const navigationExtras: NavigationExtras = {
      state: { value: this.product },
    };
    this.router.navigate(['/admin/edit-product'], navigationExtras);
  }

  onGoBackToList(): void {
    this.router.navigate(['/admin/product-list']);
  }

  async onGoToDelete(): Promise<void> {
    try {
      await this.productSvc.onDeleteProduct(this.product.id);
      alert('delete');
      this.onGoBackToList();
    } catch (err) {
      console.log(err);
    }
  }
}
