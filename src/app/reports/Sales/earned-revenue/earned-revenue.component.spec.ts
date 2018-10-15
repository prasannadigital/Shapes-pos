import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedRevenueComponent } from './earned-revenue.component';

describe('EarnedRevenueComponent', () => {
  let component: EarnedRevenueComponent;
  let fixture: ComponentFixture<EarnedRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnedRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnedRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
