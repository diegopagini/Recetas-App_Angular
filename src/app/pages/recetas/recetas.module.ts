import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas.component';
import { Routes, RouterModule } from '@angular/router';
import { RecetaModule } from '../receta/receta.module';
import { MaterialModule } from 'src/app/material/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: RecetasComponent,
  },
];

@NgModule({
  declarations: [RecetasComponent],
  imports: [
    CommonModule,
    RecetaModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [RecetasComponent],
})
export class RecetasModule {}
