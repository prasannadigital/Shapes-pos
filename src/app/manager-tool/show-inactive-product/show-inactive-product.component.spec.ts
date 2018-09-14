import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInactiveProductComponent } from './show-inactive-product.component';

describe('ShowInactiveProductComponent', () => {
  let component: ShowInactiveProductComponent;
  let fixture: ComponentFixture<ShowInactiveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInactiveProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInactiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
