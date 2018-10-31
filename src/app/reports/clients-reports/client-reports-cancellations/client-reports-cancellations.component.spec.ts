import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsCancellationsComponent } from './client-reports-cancellations.component';

describe('ClientReportsCancellationsComponent', () => {
  let component: ClientReportsCancellationsComponent;
  let fixture: ComponentFixture<ClientReportsCancellationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsCancellationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsCancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
