import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/core/services/order-service.service';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css'],
})
export class SquadComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // checkoutFirebase(orderId: string): void {
  //   console.log('checking out with item id: ' + orderId);

  //   var stripe = Stripe(environment.stripe_PK);

  //   this.afFun
  //     .httpsCallable('stripeCheckout')({ id: orderId })
  //     .subscribe((result) => {
  //       console.log({ result });

  //       stripe
  //         .redirectToCheckout({
  //           sessionId: result,
  //         })
  //         .then(function (result: any) {
  //           console.log(result.error.message);
  //         });
  //     });
  // }
}
