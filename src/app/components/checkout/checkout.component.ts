import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { OrderServiceService } from 'src/app/core/services/order-service.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  form!: FormGroup;

  total$ = this.shopingCartSvc.totalAction$;
  cart$ = this.shopingCartSvc.cartAction$;

  cart: any;
  total: any;

  isDelivery = true;

  stores = [
    {
      store: 'donde tu mama calata',
    },
    {
      store: 'donde tu tia calata',
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private shopingCartSvc: ShoppingCartService,
    private OrderSvc: OrderServiceService
  ) {
    this.formBuild();
  }

  ngOnInit(): void {}

  onSubmitCheckoutForm() {
    // console.log('form', this.form.value);
    this.total$.subscribe((res) => (this.total = res));
    this.cart$.subscribe((res) => (this.cart = res));
    const order = {
      ...this.form.value,
      total: this.total,
      cart: this.cart,
    };
    console.log(order);

    if (this.form.valid) {
      const newOrder = order;
      const orderId = order?.id || null;

      this.OrderSvc.onSaveOrder(newOrder, orderId);
    }

    //Here we have to create thank you page
    this.router.navigate(['/']);
    this.shopingCartSvc.resetCart(), delay(2000);
  }

  onPickupDelivery(value: boolean) {
    this.isDelivery = value;
  }

  private formBuild(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      store: '',
      shippingAddress: '',
      city: '',
      date: this.getCurrentDate(),
      // isDelivery: this.isDelivery,
    });
  }

  private getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
