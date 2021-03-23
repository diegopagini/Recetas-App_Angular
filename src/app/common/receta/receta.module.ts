import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecetaComponent],
  imports: [CommonModule, RouterModule],
  exports: [RecetaComponent],
})
export class RecetaModule {}
