import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from '../interfaces/receta.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  private base_url: 'https://recetas-34d3c-default-rtdb.firebaseio.com/recetas.json';

  constructor(private http: HttpClient) {}

  // POST de una receta
  crearReceta(receta: Receta | any) {
    return this.http.post(`${this.base_url}`, receta);
  }

  obtenerReceta() {
    return this.http.get(`${this.base_url}`);
  }

  private crearArray(recetaObj: object) {
    return 'Hola mundo';
  }
}
