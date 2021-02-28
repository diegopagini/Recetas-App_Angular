import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var M: any;
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {
  customForm: FormGroup;
  recetas = [1, 2, 3];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.openModal();
    this.createForm();
    this.formListener();
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
      foto: ['', [Validators.required]],
      ingredientes: ['', [Validators.required, Validators.minLength(5)]],
      preparacion: ['', [Validators.required, Validators.minLength(10)]],
    });
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

  enviarReceta() {
    console.log(this.customForm.value);
    if (this.customForm.valid) {
      //Enviar
    } else {
      this.customForm.markAllAsTouched();
    }

    this.customForm.reset();
  }

  formListener() {
    this.customForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
