import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { Receta } from '../interfaces/receta.interface';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private CARPETA_RECETAS = 'recetas';

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  private guardarReceta(receta: { nombre: string; url: string }) {
    this.db.collection(`/${this.CARPETA_RECETAS}`).add(receta);
  }

  private cargarRecetasFirebase(receta: Receta) {
    const file = receta.receta;
    const filePath = `${this.CARPETA_RECETAS}/${receta.titulo}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    uploadTask
      .percentageChanges()
      .subscribe((resp) => (receta.progreso = resp));

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((url) => {
            console.log('Receta guardada con éxito');
            receta.url = url;
            this.guardarReceta({
              nombre: receta.titulo,
              url: receta.url,
            });
          })
        )
      )
      .subscribe();
  }
}
