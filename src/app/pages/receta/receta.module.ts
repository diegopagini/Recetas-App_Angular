import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import { SpinerModule } from 'src/app/common/spiner/spiner.module';

@NgModule({
  declarations: [RecetaComponent],
  imports: [CommonModule, SpinerModule],
  exports: [RecetaComponent],
})
export class RecetaModule {}
