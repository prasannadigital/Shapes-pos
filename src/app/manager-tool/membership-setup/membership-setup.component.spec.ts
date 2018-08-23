import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipSetupComponent } from './membership-setup.component';

describe('MembershipSetupComponent', () => {
  let component: MembershipSetupComponent;
  let fixture: ComponentFixture<MembershipSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
