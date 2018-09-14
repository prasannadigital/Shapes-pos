import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductColorsComponent } from './product-colors.component';

describe('ProductColorsComponent', () => {
  let component: ProductColorsComponent;
  let fixture: ComponentFixture<ProductColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
