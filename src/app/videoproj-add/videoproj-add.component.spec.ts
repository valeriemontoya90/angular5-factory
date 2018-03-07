import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojAddComponent } from './videoproj-add.component';

describe('VideoprojAddComponent', () => {
  let component: VideoprojAddComponent;
  let fixture: ComponentFixture<VideoprojAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
