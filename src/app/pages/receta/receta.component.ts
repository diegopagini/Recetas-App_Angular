import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from '../../interfaces/receta.interface';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  public receta: Receta;
  public id: string;
  public recetaId: string;
  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recetaService.getReceta(params['id']).subscribe((data: any) => {
        this.id = params['id'];
        this.receta = data.filter((element: Receta) => {
          return element.id.includes(this.id);
        });
        console.log(this.receta);
      });
    });
  }
}
