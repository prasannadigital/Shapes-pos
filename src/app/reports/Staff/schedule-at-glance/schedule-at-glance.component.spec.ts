import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAtGlanceComponent } from './schedule-at-glance.component';

describe('ScheduleAtGlanceComponent', () => {
  let component: ScheduleAtGlanceComponent;
  let fixture: ComponentFixture<ScheduleAtGlanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleAtGlanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAtGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
