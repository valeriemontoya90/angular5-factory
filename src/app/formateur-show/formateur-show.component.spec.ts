import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurShowComponent } from './formateur-show.component';

describe('FormateurShowComponent', () => {
  let component: FormateurShowComponent;
  let fixture: ComponentFixture<FormateurShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormateurShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
