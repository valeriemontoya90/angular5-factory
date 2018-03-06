import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdraganddropComponent } from './testdraganddrop.component';

describe('TestdraganddropComponent', () => {
  let component: TestdraganddropComponent;
  let fixture: ComponentFixture<TestdraganddropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdraganddropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdraganddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
