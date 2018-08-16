import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffScheduleAddComponent } from './staff-schedule-add.component';

describe('StaffScheduleAddComponent', () => {
  let component: StaffScheduleAddComponent;
  let fixture: ComponentFixture<StaffScheduleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffScheduleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
