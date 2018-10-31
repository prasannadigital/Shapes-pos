import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsLastVisitComponent } from './client-reports-last-visit.component';

describe('ClientReportsLastVisitComponent', () => {
  let component: ClientReportsLastVisitComponent;
  let fixture: ComponentFixture<ClientReportsLastVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsLastVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsLastVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
