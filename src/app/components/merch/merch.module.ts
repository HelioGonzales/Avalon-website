import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchRoutingModule } from './merch-routing.module';
import { MerchComponent } from './merch.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MerchComponent],
  imports: [CommonModule, MerchRoutingModule, SharedModule],
})
export class MerchModule {}
