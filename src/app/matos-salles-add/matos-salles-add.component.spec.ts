import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatosSallesAddComponent } from './matos-salles-add.component';

describe('MatosSallesAddComponent', () => {
  let component: MatosSallesAddComponent;
  let fixture: ComponentFixture<MatosSallesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatosSallesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatosSallesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
