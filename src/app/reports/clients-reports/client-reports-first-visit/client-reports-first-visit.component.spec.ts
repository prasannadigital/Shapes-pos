import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsFirstVisitComponent } from './client-reports-first-visit.component';

describe('ClientReportsFirstVisitComponent', () => {
  let component: ClientReportsFirstVisitComponent;
  let fixture: ComponentFixture<ClientReportsFirstVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsFirstVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsFirstVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
