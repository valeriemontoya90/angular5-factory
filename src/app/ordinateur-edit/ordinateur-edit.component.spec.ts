import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurEditComponent } from './ordinateur-edit.component';

describe('OrdinateurEditComponent', () => {
  let component: OrdinateurEditComponent;
  let fixture: ComponentFixture<OrdinateurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
