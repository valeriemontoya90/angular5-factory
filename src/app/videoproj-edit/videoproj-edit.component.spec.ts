import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojEditComponent } from './videoproj-edit.component';

describe('VideoprojEditComponent', () => {
  let component: VideoprojEditComponent;
  let fixture: ComponentFixture<VideoprojEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
