import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecetasService } from 'src/app/services/recetas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = new FormControl();
  @Output() emiteReceta = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  searching() {
    this.emiteReceta.emit(this.search.value);
    console.log(this.search.value);
  }
}
