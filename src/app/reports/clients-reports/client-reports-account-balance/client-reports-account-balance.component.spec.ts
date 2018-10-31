import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsAccountBalanceComponent } from './client-reports-account-balance.component';

describe('ClientReportsAccountBalanceComponent', () => {
  let component: ClientReportsAccountBalanceComponent;
  let fixture: ComponentFixture<ClientReportsAccountBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsAccountBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsAccountBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
