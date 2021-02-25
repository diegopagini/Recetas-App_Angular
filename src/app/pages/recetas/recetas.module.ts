import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RecetasComponent,
  },
];

@NgModule({
  declarations: [RecetasComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RecetasComponent],
})
export class RecetasModule {}
