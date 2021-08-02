import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShowsModule } from '../shows/shows.module';
import { PaymentsModule } from '../payments/payments.module';
import { AboutModule } from '../about/about.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShowsModule,
    PaymentsModule,
    AboutModule,
  ],
})
export class HomeModule {}
