import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from 'src/app/shared/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contact!: Observable<Contact[]>;

  private contactCollection!: AngularFirestoreCollection<Contact>;

  constructor(private readonly afs: AngularFirestore) {
    this.contactCollection = afs.collection<Contact>('Contact');
    this.getOrders();
  }

  onDeleteContact(contactId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.contactCollection.doc(contactId).delete();
        resolve(result);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  onSaveContact(contact: Contact, contactId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = contactId || this.afs.createId();
        const data = { id, ...contact };
        const result = await this.contactCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  private getOrders(): void {
    this.contact = this.contactCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Contact))
      );
  }
}
