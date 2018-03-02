import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatosSallesEditComponent } from './matos-salles-edit.component';

describe('MatosSallesEditComponent', () => {
  let component: MatosSallesEditComponent;
  let fixture: ComponentFixture<MatosSallesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatosSallesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatosSallesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
