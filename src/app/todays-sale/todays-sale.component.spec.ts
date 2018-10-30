import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysSaleComponent } from './todays-sale.component';

describe('TodaysSaleComponent', () => {
  let component: TodaysSaleComponent;
  let fixture: ComponentFixture<TodaysSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
