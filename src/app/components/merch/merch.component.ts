import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/core/services/product-services.service';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css'],
})
export class MerchComponent implements OnInit {
  product$ = this.productSvc.product;
  constructor(private productSvc: ProductServicesService) {}

  ngOnInit(): void {}
}
