import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarSaldoComponent } from './cargar-saldo.component';

describe('CargarSaldoComponent', () => {
  let component: CargarSaldoComponent;
  let fixture: ComponentFixture<CargarSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
