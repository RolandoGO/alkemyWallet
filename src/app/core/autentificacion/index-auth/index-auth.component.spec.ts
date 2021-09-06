import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAuthComponent } from './index-auth.component';

describe('IndexAuthComponent', () => {
  let component: IndexAuthComponent;
  let fixture: ComponentFixture<IndexAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
