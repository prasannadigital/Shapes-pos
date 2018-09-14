import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDrawerSetupComponent } from './cash-drawer-setup.component';

describe('CashDrawerSetupComponent', () => {
  let component: CashDrawerSetupComponent;
  let fixture: ComponentFixture<CashDrawerSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDrawerSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDrawerSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
