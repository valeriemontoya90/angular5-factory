import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireEditComponent } from './gestionnaire-edit.component';

describe('GestionnaireEditComponent', () => {
  let component: GestionnaireEditComponent;
  let fixture: ComponentFixture<GestionnaireEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionnaireEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionnaireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
