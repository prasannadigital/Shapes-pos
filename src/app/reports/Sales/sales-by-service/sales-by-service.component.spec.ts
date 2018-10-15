import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByServiceComponent } from './sales-by-service.component';

describe('SalesByServiceComponent', () => {
  let component: SalesByServiceComponent;
  let fixture: ComponentFixture<SalesByServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
