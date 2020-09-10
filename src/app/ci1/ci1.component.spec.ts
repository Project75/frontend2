import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ci1Component } from './ci1.component';

describe('Ci1Component', () => {
  let component: Ci1Component;
  let fixture: ComponentFixture<Ci1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ci1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ci1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
