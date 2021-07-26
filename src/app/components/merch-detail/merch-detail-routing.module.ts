import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchDetailComponent } from './merch-detail.component';

const routes: Routes = [{ path: '', component: MerchDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchDetailRoutingModule { }
