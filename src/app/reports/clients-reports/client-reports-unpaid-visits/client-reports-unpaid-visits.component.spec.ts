import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsUnpaidVisitsComponent } from './client-reports-unpaid-visits.component';

describe('ClientReportsUnpaidVisitsComponent', () => {
  let component: ClientReportsUnpaidVisitsComponent;
  let fixture: ComponentFixture<ClientReportsUnpaidVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsUnpaidVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsUnpaidVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
