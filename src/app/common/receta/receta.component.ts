import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss'],
})
export class RecetaComponent implements OnInit {
  @Input() recetas;
  constructor() {}

  ngOnInit(): void {}
}
