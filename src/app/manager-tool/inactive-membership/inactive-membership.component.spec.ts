import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveMembershipComponent } from './inactive-membership.component';

describe('InactiveMembershipComponent', () => {
  let component: InactiveMembershipComponent;
  let fixture: ComponentFixture<InactiveMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
