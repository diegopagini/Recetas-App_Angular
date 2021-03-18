import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Receta } from 'src/app/interfaces/receta.interface';
import { RecetasService } from '../../services/recetas.service';

declare var M: any;

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {
  customForm: FormGroup;
  recetas: Receta[] = [];
  items$: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    public _recetasService: RecetasService,
    firestore: AngularFirestore
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
}
