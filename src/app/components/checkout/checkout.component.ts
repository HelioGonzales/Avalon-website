import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { OrderServiceService } from 'src/app/core/services/order-service.service';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';
import { AngularFireFunctions } from '@angular/fire/functions';

import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import { _topicWithOptions } from 'firebase-functions/lib/providers/pubsub';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  emptyCart!: number;
  quantity$ = this.shoppingCartSvc.quantityAction$;

  stripe: any;
  form!: FormGroup;

  total$ = this.shopingCartSvc.totalAction$;
  cart$ = this.shopingCartSvc.cartAction$;

  cart: any;
  total: any;

  isDelivery = true;

  stores = [
    {
      store: 'Av. San Martin #15. Ica - Peru',
    },
    {
      store: 'Centralna #11. Krakow - Poland',
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
    // private router: Router,
    private shopingCartSvc: ShoppingCartService,
    private OrderSvc: OrderServiceService,
    private fns: AngularFireFunctions,
    private shoppingCartSvc: ShoppingCartService
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

    this.onCreateStripeCheckout(order);

    //Here we have to create thank you page
    alert('thank you your order will be processed');
    // this.router.navigate(['/']);
    this.shopingCartSvc.resetCart(), delay(2000);
  }

  async onCreateStripeCheckout(order: any) {
    console.log(order.total, order.name);

    this.stripe = await loadStripe(environment.stripe_PK);
    const createStripeCheckout = this.fns.httpsCallable('createStripeCheckout');
    await createStripeCheckout({
      quantity: 1,
      unit_amount: order.total,
      name: order.name,
      // price_data: {
      //   product_data: {},
      // },
    })
      .toPromise()
      .then((res: string) => {
        console.log(res);

        if (res != 'not available') {
          this.stripe.redirectToCheckout({ sessionId: res });
        }
      })
      // .then((response) => {
      //   console.log(response);

      //   if (response && response.data && response.data.id) {
      //     const sessionId = response.data.id;
      //     this.stripe.redirectToCheckout({ sessionId });
      //   }
      // })
      .catch((e) => console.log('Error', e));
  }

  onPickupDelivery(value: boolean) {
    this.isDelivery = value;
  }

  private formBuild(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
          // Validators.pattern('^[A-Za-z????????????????????????????s]+$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          // Validators.minLength(5),
          Validators.pattern(
            '^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$'
          ),
        ],
      ],
      store: [''],
      shippingAddress: [''],
      city: [''],
      date: this.getCurrentDate(),
      // isDelivery: this.isDelivery,
    });
  }

  private getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  // get shippingAddress() {
  //   return this.form.get('shippingAddress');
  // }
  // get city() {
  //   return this.form.get('city');
  // }
}
