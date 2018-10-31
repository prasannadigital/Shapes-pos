import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailsSalesPerformanceComponent } from './retails-sales-performance.component';

describe('RetailsSalesPerformanceComponent', () => {
  let component: RetailsSalesPerformanceComponent;
  let fixture: ComponentFixture<RetailsSalesPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailsSalesPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailsSalesPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
