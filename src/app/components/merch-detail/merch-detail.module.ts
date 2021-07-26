import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchDetailRoutingModule } from './merch-detail-routing.module';
import { MerchDetailComponent } from './merch-detail.component';


@NgModule({
  declarations: [
    MerchDetailComponent
  ],
  imports: [
    CommonModule,
    MerchDetailRoutingModule
  ]
})
export class MerchDetailModule { }
