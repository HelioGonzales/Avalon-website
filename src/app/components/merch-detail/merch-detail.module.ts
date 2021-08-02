import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchDetailRoutingModule } from './merch-detail-routing.module';
import { MerchDetailComponent } from './merch-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MerchDetailComponent],
  imports: [CommonModule, MerchDetailRoutingModule, SharedModule],
})
export class MerchDetailModule {}
