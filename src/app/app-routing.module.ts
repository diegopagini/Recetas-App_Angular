import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'recetas',
    loadChildren: () =>
      import('./pages/recetas/recetas.module').then((m) => m.RecetasModule),
  },
  {
    path: 'receta/:id',
    loadChildren: () =>
      import('./pages/receta/receta.module').then((m) => m.RecetaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
