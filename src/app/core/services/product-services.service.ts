import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductServicesService {
  product!: Observable<Product[]>;

  private productCollection!: AngularFirestoreCollection<Product>;

  constructor(private readonly afs: AngularFirestore) {
    this.productCollection = afs.collection<Product>('Products');

    this.getProducts();
  }

  onDeleteProduct(productId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.productCollection.doc(productId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveProduct(product: Product, productId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = productId || this.afs.createId();
        const data = { id, ...product };
        const result = await this.productCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  private getProducts(): void {
    this.product = this.productCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Product))
      );
  }
}
