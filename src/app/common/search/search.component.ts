import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = new FormControl('');
  @Output() emiteReceta = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  searching(texto: string) {
    texto = texto.trim();
    this.emiteReceta.emit(texto);
  }
}
