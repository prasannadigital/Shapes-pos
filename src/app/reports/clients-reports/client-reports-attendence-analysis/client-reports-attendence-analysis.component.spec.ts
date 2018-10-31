import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsAttendenceAnalysisComponent } from './client-reports-attendence-analysis.component';

describe('ClientReportsAttendenceAnalysisComponent', () => {
  let component: ClientReportsAttendenceAnalysisComponent;
  let fixture: ComponentFixture<ClientReportsAttendenceAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsAttendenceAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsAttendenceAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
