import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MerchServiceService {
  constructor(private afs: AngularFirestore) {}

  getProduct(productId: string) {
    let product = this.afs.firestore.doc(`Products/${productId}`);
    product.update;
    return this.afs
      .collection('Products')
      .doc(productId)
      .valueChanges()
      .pipe(
        map((detail: any) => {
          return {
            id: productId,
            name: detail.name,
            description: detail.description,
            price: detail.price,
            stock: detail.stock,
            image: detail.image,
            qty: detail.qty,
          };
        })
      );
  }
}
