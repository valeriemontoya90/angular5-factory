import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojShowComponent } from './videoproj-show.component';

describe('VideoprojShowComponent', () => {
  let component: VideoprojShowComponent;
  let fixture: ComponentFixture<VideoprojShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
