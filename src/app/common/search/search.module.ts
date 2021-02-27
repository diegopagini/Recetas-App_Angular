import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../../material/material/material.module';
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SearchComponent],
})
export class SearchModule {}
