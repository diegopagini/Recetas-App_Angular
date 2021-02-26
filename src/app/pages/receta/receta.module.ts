import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'receta',
    component: RecetaComponent,
  },
];

@NgModule({
  declarations: [RecetaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RecetaComponent],
})
export class RecetaModule {}
