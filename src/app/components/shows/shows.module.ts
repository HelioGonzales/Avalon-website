import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ShowsComponent],
  imports: [CommonModule, ShowsRoutingModule, SharedModule],
  exports: [ShowsComponent],
})
export class ShowsModule {}
