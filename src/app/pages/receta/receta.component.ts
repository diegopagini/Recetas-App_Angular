import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from '../../interfaces/receta.interface';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  receta: Receta;
  public id: string;
  public recetaId: string;
  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetasService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recetaService.getReceta(params['id']).subscribe((data: any) => {
        this.id = params['id'];
        this.receta = data.find((element: Receta) => {
          return element.id.includes(this.id);
        });
        console.log(this.receta);
      });
    });
  }

  onReturn() {
    this.location.back();
  }
}
