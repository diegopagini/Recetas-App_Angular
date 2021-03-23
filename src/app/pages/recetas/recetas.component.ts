import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { RecetasService } from '../../services/recetas.service';

declare var M: any;

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {
  customForm: FormGroup;
  items$;
  downloadURL: Observable<string>;
  fbUrl;

  constructor(
    private fb: FormBuilder,
    public _recetasService: RecetasService,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage
  ) {
    this.items$ = firestore.collection('recetas').valueChanges();
  }

  ngOnInit(): void {
    this.openModal();
    this.createForm();
  }

  openModal() {
    document.addEventListener('DOMContentLoaded', function () {
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems, {
        dismissible: false,
        opacity: 0.9,
      });
    });
  }

  createForm() {
    this.customForm = this.fb.group({
      id: [''],
      titulo: ['', [Validators.required, Validators.minLength(10)]],
      foto: ['', [Validators.required]],
      ingredientes: ['', [Validators.required, Validators.minLength(10)]],
      preparacion: ['', [Validators.required, Validators.minLength(10)]],
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
}
