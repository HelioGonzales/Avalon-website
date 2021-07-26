import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  order!: Observable<Order[]>;

  private orderCollection!: AngularFirestoreCollection<Order>;

  constructor(private readonly afs: AngularFirestore) {
    this.orderCollection = afs.collection<Order>('Orders');

    this.getOrders();
  }

  onDeleteOrder(orderId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.orderCollection.doc(orderId).delete();
        resolve(result);
      } catch (err) {
        console.log(err);
      }
    });
  }

  onSaveOrder(order: Order, orderId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = orderId || this.afs.createId();
        const data = { id, ...order };
        const result = await this.orderCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        console.log(err);
      }
    });
  }

  private getOrders(): void {
    this.order = this.orderCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Order))
      );
  }
}
