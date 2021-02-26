import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from '../interfaces/receta.interface';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  base_url: 'https://recetas-34d3c-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  // POST de una receta
  crearReceta(receta: Receta) {
    return this.http.post(`${this.base_url}/Recetas.json`, receta);
  }
}
