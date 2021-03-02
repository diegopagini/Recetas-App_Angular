import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receta } from '../interfaces/receta.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  base_url: 'https://recetas-online-6e495-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  // POST de una receta
  crearReceta(receta: Receta | any) {
    return this.http.post(`${this.base_url}`, receta);
  }

  obtenerReceta() {
    return this.http.get(`${this.base_url}/recetas.json`);
  }
}
