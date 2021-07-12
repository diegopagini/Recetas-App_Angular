import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarRecetaComponent } from './pages/cargar-receta/cargar-receta.component';
import { RecetaComponent } from './pages/receta/receta.component';
import { RecetasComponent } from './pages/recetas/recetas.component';

const routes: Routes = [
  {
    path: 'recetas',
    component: RecetasComponent,
  },
  {
    path: 'receta/:id',
    component: RecetaComponent,
  },
  {
    path: 'cargarReceta',
    component: CargarRecetaComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'recetas',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
