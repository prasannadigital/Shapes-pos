import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBySupliersComponent } from './sales-by-supliers.component';

describe('SalesBySupliersComponent', () => {
  let component: SalesBySupliersComponent;
  let fixture: ComponentFixture<SalesBySupliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBySupliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBySupliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
