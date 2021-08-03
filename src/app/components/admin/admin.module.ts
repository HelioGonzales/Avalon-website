import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CreateShowComponent } from './shows/create-show/create-show.component';
import { EditShowComponent } from './shows/edit-show/edit-show.component';
import { ShowDetailComponent } from './shows/show-detail/show-detail.component';
import { ShowListComponent } from './shows/show-list/show-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';

import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';

import { ContactListTrackedComponent } from './contacts/contact-list-tracked/contact-list-tracked.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    CreateShowComponent,
    EditShowComponent,
    ShowDetailComponent,
    ShowListComponent,
    OrderListComponent,
    OrderDetailComponent,
    ContactDetailComponent,

    ContactListTrackedComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class AdminModule {}
