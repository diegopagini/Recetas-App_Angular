import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { NavbarModule } from './navbar/navbar.module';
import { SearchModule } from './search/search.module';
import { FooterModule } from './footer/footer.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
    SearchModule,
    FooterModule,
    ModalModule,
  ],
  exports: [NavbarModule, SearchModule, FooterModule, ModalModule],
})
export class CustomCommonModule {}
