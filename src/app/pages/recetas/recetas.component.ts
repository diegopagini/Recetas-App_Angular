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
  customForm: FormGroup;
  items$: Observable<any>;
  recetas: any[] = [];
  recetas2: any[] = [];
  downloadURL: Observable<string>;
  fbUrl: string;
  valorEmitido: string;
  private unsubscribe$ = new Subject();

  constructor(
    private fb: FormBuilder,
    public _recetasService: RecetasService,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public router: Router
  ) {
    this.items$ = firestore.collection('recetas').valueChanges();
  }

  ngOnInit(): void {
    this.openModal();
    this.createForm();
    this.getRecetasData();
  }

  openModal() {
    const modalTrigger = document.getElementById('modal-trigger');
    modalTrigger.addEventListener('click', function () {
      const modalElem = document.querySelector('.modal');
      var instance = M.Modal.init(modalElem, {
        dismissible: false,
        opacity: 0.9,
      });
    });
  }

  createForm() {
    this.customForm = this.fb.group({
      id: [''],
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      foto: ['', [Validators.required]],
      ingredientes: ['', [Validators.required, Validators.minLength(5)]],
      preparacion: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  get tituloInvalid() {
    return (
      this.customForm.get('titulo').invalid &&
      this.customForm.get('titulo').touched
    );
  }

  get fotoInvalid() {
    return (
      this.customForm.get('foto').invalid && this.customForm.get('foto').touched
    );
  }

  get ingredientesInvalid() {
    return (
      this.customForm.get('ingredientes').invalid &&
      this.customForm.get('ingredientes').touched
    );
  }

  get preparacionInvalid() {
    return (
      this.customForm.get('preparacion').invalid &&
      this.customForm.get('preparacion').touched
    );
  }

  onResetetForm() {
    this.customForm.reset();
  }

  onSaveForm(form: NgForm) {
    if (this.customForm.valid) {
      this.customForm.value.id = Math.random().toString(36).substring(2);
      this.customForm.value.foto = this.fbUrl;
      this._recetasService.guardarReceta(this.customForm.value);
      Swal.fire('Guardado', this.customForm.value.titulo, 'success');
      this.onResetetForm;
    }
  }

  onFileSelected(event) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `img/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`img/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url) => {
            if (url) {
              this.fbUrl = url;
            }
          });
        })
      )
      .subscribe();
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
