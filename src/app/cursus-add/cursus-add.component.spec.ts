import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursusAddComponent } from './cursus-add.component';

describe('CursusAddComponent', () => {
  let component: CursusAddComponent;
  let fixture: ComponentFixture<CursusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
