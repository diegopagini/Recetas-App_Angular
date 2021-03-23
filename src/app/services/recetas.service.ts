import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private dataCollection: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore, public storage: AngularFireStorage) {
    this.dataCollection = this.db.collection<any>('recetas');
  }

  guardarReceta(newReceta: any) {
    this.dataCollection.add(newReceta);
  }

  getReceta(id: string) {
    const docRef = this.db.collection('recetas');
    return docRef.valueChanges();
  }
}
