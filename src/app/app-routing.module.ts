import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetaComponent } from './pages/receta/receta.component';
import { RecetasComponent } from './pages/recetas/recetas.component';

const routes: Routes = [
  {
    path: '',
    component: RecetasComponent,
  },
  {
    path: 'receta/:id',
    component: RecetaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
