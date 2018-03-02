import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatosComponent } from './matos.component';

describe('MatosComponent', () => {
  let component: MatosComponent;
  let fixture: ComponentFixture<MatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
