import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarDineroComponent } from './enviar-dinero.component';

describe('EnviarDineroComponent', () => {
  let component: EnviarDineroComponent;
  let fixture: ComponentFixture<EnviarDineroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarDineroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarDineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
