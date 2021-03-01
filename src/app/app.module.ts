import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecetasModule } from './pages/recetas/recetas.module';
import { RecetaModule } from './pages/receta/receta.module';
import { MaterialModule } from './material/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomCommonModule } from './common/custom-common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecetasService } from './services/recetas.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RecetasModule,
    RecetaModule,
    CustomCommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [RecetasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
