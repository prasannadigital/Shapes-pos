import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Options2Component } from './options2.component';

describe('Options2Component', () => {
  let component: Options2Component;
  let fixture: ComponentFixture<Options2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Options2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Options2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
