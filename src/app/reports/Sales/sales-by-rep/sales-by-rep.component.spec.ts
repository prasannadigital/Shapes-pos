import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByRepComponent } from './sales-by-rep.component';

describe('SalesByRepComponent', () => {
  let component: SalesByRepComponent;
  let fixture: ComponentFixture<SalesByRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesByRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
