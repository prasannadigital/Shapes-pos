import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileFieldsComponent } from './client-profile-fields.component';

describe('ClientProfileFieldsComponent', () => {
  let component: ClientProfileFieldsComponent;
  let fixture: ComponentFixture<ClientProfileFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProfileFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
