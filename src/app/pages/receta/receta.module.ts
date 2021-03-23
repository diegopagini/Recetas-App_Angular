import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RecetaComponent],
  imports: [CommonModule],
  exports: [RecetaComponent],
})
export class RecetaModule {}
