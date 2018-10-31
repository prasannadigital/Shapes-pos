import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsMailingListsComponent } from './client-reports-mailing-lists.component';

describe('ClientReportsMailingListsComponent', () => {
  let component: ClientReportsMailingListsComponent;
  let fixture: ComponentFixture<ClientReportsMailingListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsMailingListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsMailingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
