import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas.component';
import { Routes, RouterModule } from '@angular/router';
import { RecetaModule } from '../../common/receta/receta.module';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinerModule } from 'src/app/common/spiner/spiner.module';

@NgModule({
  declarations: [RecetasComponent],
  imports: [
    CommonModule,
    RecetaModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinerModule,
  ],
  exports: [RecetasComponent],
})
export class RecetasModule {}
