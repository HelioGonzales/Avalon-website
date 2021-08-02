import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServiceService } from 'src/app/core/services/order-service.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  order!: Order;

  constructor(private router: Router, private orderSvc: OrderServiceService) {
    const navigation = this.router.getCurrentNavigation();
    this.order = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.order === 'undefined') {
      this.router.navigate(['/admin/order-list']);
    }
  }

  onGoBackToList() {
    this.router.navigate(['/admin/order-list']);
  }

  async onGoToDelete(): Promise<void> {
    const confirmacion = confirm('are you sure you want to delete it?');
    if (confirmacion) {
      try {
        await this.orderSvc.onDeleteOrder(this.order.id);
        alert('deleted');
        this.onGoBackToList();
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  }
}
