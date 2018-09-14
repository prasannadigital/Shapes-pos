import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipRecieptComponent } from './membership-reciept.component';

describe('MembershipRecieptComponent', () => {
  let component: MembershipRecieptComponent;
  let fixture: ComponentFixture<MembershipRecieptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipRecieptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipRecieptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
