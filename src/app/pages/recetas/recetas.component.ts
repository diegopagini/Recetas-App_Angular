import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { RecetasService } from '../../services/recetas.service';

declare var M: any;

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {
  customForm: FormGroup;
  recetas: any = [1, 2, 3];

  constructor(
    private fb: FormBuilder,
    private recetasService: RecetasService
  ) {}

  ngOnInit(): void {
    console.log(this.recetasService.obtenerReceta());
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

  enviarReceta(form) {
    if (this.customForm.valid) {
      this.recetas.push(this.customForm);
      const JSON_form = JSON.stringify(this.customForm.value);
      form = JSON_form;
      this.recetasService.crearReceta(form).subscribe((resp) => {
        console.log(resp);
      });
      this.customForm.reset;
    } else {
      this.customForm.markAllAsTouched();
      return;
    }
  }

  crearReceta(form: NgForm) {
    if (form.valid) {
      console.log(this.customForm.value);
      this.recetasService
        .crearReceta(JSON.stringify(this.customForm.value))
        .subscribe((resp) => {
          console.log(resp);
        });
    } else {
      this.customForm.markAllAsTouched();
      return;
    }
  }
}
