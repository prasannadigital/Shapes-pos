import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBySupplierReportsComponent } from './sales-by-supplier-reports.component';

describe('SalesBySupplierReportsComponent', () => {
  let component: SalesBySupplierReportsComponent;
  let fixture: ComponentFixture<SalesBySupplierReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBySupplierReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBySupplierReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
