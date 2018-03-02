import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatosSallesShowComponent } from './matos-salles-show.component';

describe('MatosSallesShowComponent', () => {
  let component: MatosSallesShowComponent;
  let fixture: ComponentFixture<MatosSallesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatosSallesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatosSallesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
