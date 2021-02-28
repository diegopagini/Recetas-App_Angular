import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare var M: any;

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {
  customForm: FormGroup;
  recetas: any = [1, 2, 3];

  constructor(private fb: FormBuilder, private router: Router) {}

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

  enviarReceta() {
    console.log(this.customForm.value);
    if (this.customForm.valid) {
      this.recetas.push(this.customForm);
      this.customForm.reset;
    } else {
      this.customForm.markAllAsTouched();
      return;
    }
  }
}
