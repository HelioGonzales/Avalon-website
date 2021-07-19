import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowFormComponent } from './show-form/show-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductFormComponent,
    ShowFormComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductFormComponent,
    ShowFormComponent,
  ],
})
export class SharedModule {}
