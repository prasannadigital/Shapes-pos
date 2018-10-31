import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsNewMembersComponent } from './client-reports-new-members.component';

describe('ClientReportsNewMembersComponent', () => {
  let component: ClientReportsNewMembersComponent;
  let fixture: ComponentFixture<ClientReportsNewMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsNewMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsNewMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
