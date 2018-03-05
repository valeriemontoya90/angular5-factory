import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojListComponent } from './videoproj-list.component';

describe('VideoprojListComponent', () => {
  let component: VideoprojListComponent;
  let fixture: ComponentFixture<VideoprojListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
