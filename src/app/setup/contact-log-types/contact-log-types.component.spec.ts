import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLogTypesComponent } from './contact-log-types.component';

describe('ContactLogTypesComponent', () => {
  let component: ContactLogTypesComponent;
  let fixture: ComponentFixture<ContactLogTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactLogTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLogTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
