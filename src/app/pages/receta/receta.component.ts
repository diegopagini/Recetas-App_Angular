import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  receta;
  recetaToShow;
  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetasService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.receta = this.recetaService
        .getReceta(params['id'])
        .subscribe((data) => {
          this.recetaToShow = data;
          console.log(data);
        });
      console.log(this.recetaToShow);
    });
  }
}
