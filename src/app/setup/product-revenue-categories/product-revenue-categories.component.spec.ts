import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRevenueCategoriesComponent } from './product-revenue-categories.component';

describe('ProductRevenueCategoriesComponent', () => {
  let component: ProductRevenueCategoriesComponent;
  let fixture: ComponentFixture<ProductRevenueCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRevenueCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRevenueCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
