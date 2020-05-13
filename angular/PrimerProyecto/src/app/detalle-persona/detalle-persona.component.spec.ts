import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonaComponent } from './detalle-persona.component';

describe('DetallePersonaComponent', () => {
  let component: DetallePersonaComponent;
  let fixture: ComponentFixture<DetallePersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
