import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopayExpirationsComponent } from './autopay-expirations.component';

describe('AutopayExpirationsComponent', () => {
  let component: AutopayExpirationsComponent;
  let fixture: ComponentFixture<AutopayExpirationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutopayExpirationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopayExpirationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
