import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchComponent } from './merch.component';

const routes: Routes = [{ path: '', component: MerchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchRoutingModule { }
