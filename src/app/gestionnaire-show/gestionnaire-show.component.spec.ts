import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireShowComponent } from './gestionnaire-show.component';

describe('GestionnaireShowComponent', () => {
  let component: GestionnaireShowComponent;
  let fixture: ComponentFixture<GestionnaireShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionnaireShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
