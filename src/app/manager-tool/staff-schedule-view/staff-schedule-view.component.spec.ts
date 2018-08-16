import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffScheduleViewComponent } from './staff-schedule-view.component';

describe('StaffScheduleViewComponent', () => {
  let component: StaffScheduleViewComponent;
  let fixture: ComponentFixture<StaffScheduleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffScheduleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffScheduleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
