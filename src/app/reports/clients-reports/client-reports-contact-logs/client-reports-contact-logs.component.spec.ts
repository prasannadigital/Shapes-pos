import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsContactLogsComponent } from './client-reports-contact-logs.component';

describe('ClientReportsContactLogsComponent', () => {
  let component: ClientReportsContactLogsComponent;
  let fixture: ComponentFixture<ClientReportsContactLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsContactLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsContactLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
