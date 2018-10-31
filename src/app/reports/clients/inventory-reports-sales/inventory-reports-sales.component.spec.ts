import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryReportsSalesComponent } from './inventory-reports-sales.component';

describe('InventoryReportsSalesComponent', () => {
  let component: InventoryReportsSalesComponent;
  let fixture: ComponentFixture<InventoryReportsSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryReportsSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryReportsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
