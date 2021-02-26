import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { NavbarModule } from './navbar/navbar.module';
import { SearchModule } from './search/search.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    SearchModule,
    FooterModule,
  ],
  exports: [NavbarModule, SearchModule, FooterModule],
})
export class CustomCommonModule {}
