import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueSubCategoriesComponent } from './revenue-sub-categories.component';

describe('RevenueSubCategoriesComponent', () => {
  let component: RevenueSubCategoriesComponent;
  let fixture: ComponentFixture<RevenueSubCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueSubCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
