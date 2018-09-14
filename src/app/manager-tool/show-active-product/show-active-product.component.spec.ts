import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActiveProductComponent } from './show-active-product.component';

describe('ShowActiveProductComponent', () => {
  let component: ShowActiveProductComponent;
  let fixture: ComponentFixture<ShowActiveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowActiveProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActiveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
