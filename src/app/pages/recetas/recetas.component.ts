import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Receta } from 'src/app/interfaces/receta.interface';
import Swal from 'sweetalert2';
import { RecetasService } from '../../services/recetas.service';

declare var M: any;

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit, OnDestroy {
  public items$: Observable<any>;
  public recetas: any[] = [];
  public recetas2: any[] = [];
  public valorEmitido: string;
  private unsubscribe$ = new Subject();

  constructor(private firestore: AngularFirestore) {
    this.items$ = firestore.collection('recetas').valueChanges();
  }

  ngOnInit(): void {
    this.getRecetasData();
  }

  recibeEvento(valorEmitido) {
    this.recetas = this.recetas.find((receta: Receta) => {
      const recetaBuscada = receta.titulo.includes(valorEmitido);
      return recetaBuscada;
    });
  }

  buscarReceta(termino: string): Receta[] {
    let recetaArr: Receta[] = [];
    termino = termino.toLowerCase();
    if (termino !== '') {
      for (let i = 0; i < this.recetas.length; i++) {
        let receta = this.recetas[i];
        let titulo = receta.titulo.toLowerCase();
        if (titulo.indexOf(termino) >= 0) {
          receta.idx = i;
          recetaArr.push(receta);
        }
      }
      this.recetas = recetaArr;
      return this.recetas;
    } else {
      this.recetas = this.recetas2;
    }
    this.getRecetasData();
  }

  getRecetasData() {
    this.items$ = this.firestore.collection('recetas').valueChanges();
    this.items$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: Receta[]) => {
        this.recetas2 = res.map((recetas) => recetas);
        this.recetas = res.map((recetas) => recetas);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
