import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTimeClockComponent } from './report-time-clock.component';

describe('ReportTimeClockComponent', () => {
  let component: ReportTimeClockComponent;
  let fixture: ComponentFixture<ReportTimeClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTimeClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTimeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
