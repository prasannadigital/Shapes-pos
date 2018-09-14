import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidIoAccessComponent } from './paid-io-access.component';

describe('PaidIoAccessComponent', () => {
  let component: PaidIoAccessComponent;
  let fixture: ComponentFixture<PaidIoAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidIoAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidIoAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
