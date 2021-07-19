import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from 'src/app/shared/models/show.model';

@Injectable({
  providedIn: 'root',
})
export class ShowServiceService {
  show!: Observable<Show[]>;

  private showCollection!: AngularFirestoreCollection<Show>;

  constructor(private readonly afs: AngularFirestore) {
    this.showCollection = afs.collection<Show>('Shows');
    this.getShows();
  }

  onDeleteShow(showId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.showCollection.doc(showId).delete();
        resolve(result);
      } catch (err) {
        console.log(err);
      }
    });
  }

  onSaveShow(show: Show, showId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = showId || this.afs.createId();
        const data = { id, ...show };
        const result = await this.showCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        console.log(err);
      }
    });
  }

  private getShows(): void {
    this.show = this.showCollection
      .snapshotChanges()
      .pipe(map((actions) => actions.map((a) => a.payload.doc.data() as Show)));
  }
}
