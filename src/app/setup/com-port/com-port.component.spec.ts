import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComPortComponent } from './com-port.component';

describe('ComPortComponent', () => {
  let component: ComPortComponent;
  let fixture: ComponentFixture<ComPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
