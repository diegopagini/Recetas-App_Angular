import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, NavbarModule],
  exports: [NavbarModule],
})
export class CustomCommonModule {}
