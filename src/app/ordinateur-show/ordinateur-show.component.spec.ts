import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurShowComponent } from './ordinateur-show.component';

describe('OrdinateurShowComponent', () => {
  let component: OrdinateurShowComponent;
  let fixture: ComponentFixture<OrdinateurShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
