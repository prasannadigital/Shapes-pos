import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopayDetailsComponent } from './autopay-details.component';

describe('AutopayDetailsComponent', () => {
  let component: AutopayDetailsComponent;
  let fixture: ComponentFixture<AutopayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutopayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
