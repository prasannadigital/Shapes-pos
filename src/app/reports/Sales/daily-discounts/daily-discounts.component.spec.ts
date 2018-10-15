import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDiscountsComponent } from './daily-discounts.component';

describe('DailyDiscountsComponent', () => {
  let component: DailyDiscountsComponent;
  let fixture: ComponentFixture<DailyDiscountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDiscountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
