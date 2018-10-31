import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsEntryLogsComponent } from './client-reports-entry-logs.component';

describe('ClientReportsEntryLogsComponent', () => {
  let component: ClientReportsEntryLogsComponent;
  let fixture: ComponentFixture<ClientReportsEntryLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsEntryLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsEntryLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
