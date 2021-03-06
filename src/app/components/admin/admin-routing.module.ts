import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactListTrackedComponent } from './contacts/contact-list-tracked/contact-list-tracked.component';

import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CreateShowComponent } from './shows/create-show/create-show.component';
import { EditShowComponent } from './shows/edit-show/edit-show.component';
import { ShowDetailComponent } from './shows/show-detail/show-detail.component';
import { ShowListComponent } from './shows/show-list/show-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: OrderListComponent,
      },
      {
        path: 'create-product',
        component: CreateProductComponent,
      },
      {
        path: 'edit-product',
        component: EditProductComponent,
      },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent,
      },
      {
        path: 'create-show',
        component: CreateShowComponent,
      },
      {
        path: 'edit-show',
        component: EditShowComponent,
      },
      {
        path: 'show-list',
        component: ShowListComponent,
      },
      {
        path: 'show-detail',
        component: ShowDetailComponent,
      },
      {
        path: 'order-list',
        component: OrderListComponent,
      },
      {
        path: 'order-detail',
        component: OrderDetailComponent,
      },

      {
        path: 'contact-detail',
        component: ContactDetailComponent,
      },
      {
        path: 'contact-list-tracked',
        component: ContactListTrackedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
