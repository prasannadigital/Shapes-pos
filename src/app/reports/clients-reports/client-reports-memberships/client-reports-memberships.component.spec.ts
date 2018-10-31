import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsMembershipsComponent } from './client-reports-memberships.component';

describe('ClientReportsMembershipsComponent', () => {
  let component: ClientReportsMembershipsComponent;
  let fixture: ComponentFixture<ClientReportsMembershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsMembershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
