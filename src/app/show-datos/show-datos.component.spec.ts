import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDatosComponent } from './show-datos.component';

describe('ShowDatosComponent', () => {
  let component: ShowDatosComponent;
  let fixture: ComponentFixture<ShowDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
