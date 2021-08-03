import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquadRoutingModule } from './squad-routing.module';
import { SquadComponent } from './squad.component';

@NgModule({
  declarations: [SquadComponent],
  imports: [CommonModule, SquadRoutingModule],
  exports: [SquadComponent],
})
export class SquadModule {}
