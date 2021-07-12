import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { RecetasService } from 'src/app/services/recetas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cargar-receta',
  templateUrl: './cargar-receta.component.html',
  styleUrls: ['./cargar-receta.component.scss'],
})
export class CargarRecetaComponent {
  public customForm: FormGroup;
  private downloadURL: Observable<string>;
  private fbUrl: string;
  private unsubscribe$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private _recetasService: RecetasService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.createForm();
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

  onSaveForm(form: NgForm) {
    if (this.customForm.valid) {
      this.customForm.value.id = Math.random().toString(36).substring(2);
      this.customForm.value.foto = this.fbUrl;
      this._recetasService.guardarReceta(this.customForm.value);
      Swal.fire('Guardado', this.customForm.value.titulo, 'success');
      this.customForm.reset();
      this.router.navigate(['/recetas']);
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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
