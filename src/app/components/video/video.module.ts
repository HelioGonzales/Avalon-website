import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [CommonModule, VideoRoutingModule],
})
export class VideoModule {}
