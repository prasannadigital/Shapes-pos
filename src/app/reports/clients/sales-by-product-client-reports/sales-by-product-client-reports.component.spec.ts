import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByProductClientReportsComponent } from './sales-by-product-client-reports.component';

describe('SalesByProductClientReportsComponent', () => {
  let component: SalesByProductClientReportsComponent;
  let fixture: ComponentFixture<SalesByProductClientReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByProductClientReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByProductClientReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
