import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByCatagoryComponent } from './sales-by-catagory.component';

describe('SalesByCatagoryComponent', () => {
  let component: SalesByCatagoryComponent;
  let fixture: ComponentFixture<SalesByCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
