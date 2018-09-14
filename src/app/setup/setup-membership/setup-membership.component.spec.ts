import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMembershipComponent } from './setup-membership.component';

describe('SetupMembershipComponent', () => {
  let component: SetupMembershipComponent;
  let fixture: ComponentFixture<SetupMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
