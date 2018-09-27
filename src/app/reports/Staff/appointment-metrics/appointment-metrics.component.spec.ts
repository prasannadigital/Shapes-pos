import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentMetricsComponent } from './appointment-metrics.component';

describe('AppointmentMetricsComponent', () => {
  let component: AppointmentMetricsComponent;
  let fixture: ComponentFixture<AppointmentMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
