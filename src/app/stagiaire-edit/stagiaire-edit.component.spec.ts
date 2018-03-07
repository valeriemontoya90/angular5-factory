import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireEditComponent } from './stagiaire-edit.component';

describe('StagiaireEditComponent', () => {
  let component: StagiaireEditComponent;
  let fixture: ComponentFixture<StagiaireEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagiaireEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiaireEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
