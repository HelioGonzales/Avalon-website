import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

@NgModule({
  declarations: [CheckoutComponent, CartDetailComponent],
  imports: [CommonModule, CheckoutRoutingModule, ReactiveFormsModule],
})
export class CheckoutModule {}
