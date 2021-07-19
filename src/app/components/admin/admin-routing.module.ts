import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
