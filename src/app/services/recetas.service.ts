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

  public guardarReceta(receta: Receta[]) {
    this.db.collection(`/${this.CARPETA_RECETAS}`).add(receta);
  }

  // cargarRecetasFirebase(recetas: Receta[]) {
  //   for (const item of recetas) {
  //     item.estaSubiendo = true;
  //     if (item.progreso >= 100) {
  //       continue;
  //     }

  //     const file =
  //       item.imagen + item.ingredientes + item.preparacion + item.titulo;
  //     const filePath = `${this.CARPETA_RECETAS}/${item.titulo}`;
  //     const fileRef = this.storage.ref(filePath);
  //     const uploadTask = this.storage.upload(filePath, file);

  //     uploadTask
  //       .percentageChanges()
  //       .subscribe((resp) => (item.progreso = resp));

  //     uploadTask
  //       .snapshotChanges()
  //       .pipe(
  //         finalize(() =>
  //           fileRef.getDownloadURL().subscribe((url) => {
  //             console.log('Receta guardada con éxito');
  //             item.url = url;
  //             item.estaSubiendo = false;
  //             this.guardarReceta({
  //               nombre: item.titulo,
  //               url: item.url,
  //             });
  //           })
  //         )
  //       )
  //       .subscribe();
  //   }
  // }
}
