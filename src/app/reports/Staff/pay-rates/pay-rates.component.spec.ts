import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRatesComponent } from './pay-rates.component';

describe('PayRatesComponent', () => {
  let component: PayRatesComponent;
  let fixture: ComponentFixture<PayRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
