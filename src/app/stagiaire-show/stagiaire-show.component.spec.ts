import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagiaireShowComponent } from './stagiaire-show.component';

describe('StagiaireShowComponent', () => {
  let component: StagiaireShowComponent;
  let fixture: ComponentFixture<StagiaireShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagiaireShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagiaireShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
