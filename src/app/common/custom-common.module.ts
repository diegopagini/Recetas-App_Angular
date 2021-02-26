import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { NavbarModule } from './navbar/navbar.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, NavbarModule, SearchModule],
  exports: [NavbarModule, SearchModule],
})
export class CustomCommonModule {}
