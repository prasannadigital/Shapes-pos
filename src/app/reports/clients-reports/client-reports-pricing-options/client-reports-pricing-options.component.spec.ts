import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsPricingOptionsComponent } from './client-reports-pricing-options.component';

describe('ClientReportsPricingOptionsComponent', () => {
  let component: ClientReportsPricingOptionsComponent;
  let fixture: ComponentFixture<ClientReportsPricingOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsPricingOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsPricingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
