import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffClockInOutComponent } from './staff-clock-in-out.component';

describe('StaffClockInOutComponent', () => {
  let component: StaffClockInOutComponent;
  let fixture: ComponentFixture<StaffClockInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffClockInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffClockInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
