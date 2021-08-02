import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowFormComponent } from './show-form/show-form.component';
import { CartComponent } from './cart/cart.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductFormComponent,
    ShowFormComponent,
    CartComponent,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductFormComponent,
    ShowFormComponent,
    CartComponent,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
