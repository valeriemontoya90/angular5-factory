import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursusShowComponent } from './cursus-show.component';

describe('CursusShowComponent', () => {
  let component: CursusShowComponent;
  let fixture: ComponentFixture<CursusShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursusShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursusShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
