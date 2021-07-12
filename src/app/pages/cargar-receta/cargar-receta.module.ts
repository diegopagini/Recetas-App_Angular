import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargarRecetaComponent } from './cargar-receta.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CargarRecetaComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [CargarRecetaComponent],
})
export class CargarRecetaModule {}
