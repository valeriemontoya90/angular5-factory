import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienShowComponent } from './technicien-show.component';

describe('TechnicienShowComponent', () => {
  let component: TechnicienShowComponent;
  let fixture: ComponentFixture<TechnicienShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicienShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicienShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
