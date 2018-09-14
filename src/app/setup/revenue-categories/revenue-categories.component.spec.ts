import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueCategoriesComponent } from './revenue-categories.component';

describe('RevenueCategoriesComponent', () => {
  let component: RevenueCategoriesComponent;
  let fixture: ComponentFixture<RevenueCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
