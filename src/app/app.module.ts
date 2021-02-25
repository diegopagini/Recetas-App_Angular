import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecetasModule } from './pages/recetas/recetas.module';
import { RecetaModule } from './pages/receta/receta.module';
import { MaterialModule } from './material/material/material.module';
import { CustomCommonModule } from './common/custom-common/custom-common.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CustomCommonModule,
    RecetasModule,
    RecetaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
