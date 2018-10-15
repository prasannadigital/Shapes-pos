import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceWithRevenueComponent } from './attendence-with-revenue.component';

describe('AttendenceWithRevenueComponent', () => {
  let component: AttendenceWithRevenueComponent;
  let fixture: ComponentFixture<AttendenceWithRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendenceWithRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendenceWithRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
