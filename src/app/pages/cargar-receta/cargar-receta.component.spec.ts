import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarRecetaComponent } from './cargar-receta.component';

describe('CargarRecetaComponent', () => {
  let component: CargarRecetaComponent;
  let fixture: ComponentFixture<CargarRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
