import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffVieworeditTimeclockComponent } from './staff-vieworedit-timeclock.component';

describe('StaffVieworeditTimeclockComponent', () => {
  let component: StaffVieworeditTimeclockComponent;
  let fixture: ComponentFixture<StaffVieworeditTimeclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffVieworeditTimeclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffVieworeditTimeclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
