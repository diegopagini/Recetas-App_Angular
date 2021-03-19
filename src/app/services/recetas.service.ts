import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { Receta } from '../interfaces/receta.interface';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private dataCollection: AngularFirestoreCollection<any>;

  constructor(afs: AngularFirestore) {
    this.dataCollection = afs.collection<any>('recetas');
  }

  saveMessage(newReceta: any) {
    this.dataCollection.add(newReceta);
  }
}
