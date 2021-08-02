import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { OrderServiceService } from 'src/app/core/services/order-service.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders$ = this.orderSvc.order;

  constructor(private orderSvc: OrderServiceService, private router: Router) {}

  ngOnInit(): void {}

  onGoToDetail(order: Order): void {
    const navigationExtras: NavigationExtras = {
      state: { value: order },
    };
    this.router.navigate(['admin/order-detail'], navigationExtras);
  }

  async onGoToDelete(orderId: any): Promise<void> {
    const confirmacion = confirm('are you sure to  delete it?');
    if (confirmacion) {
      try {
        await this.orderSvc.onDeleteOrder(orderId);
        alert('deleted');
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  }
}
