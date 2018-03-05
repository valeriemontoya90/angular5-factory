import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereShowComponent } from './matiere-show.component';

describe('MatiereShowComponent', () => {
  let component: MatiereShowComponent;
  let fixture: ComponentFixture<MatiereShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
