import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTransacationsComponent } from './approved-transacations.component';

describe('ApprovedTransacationsComponent', () => {
  let component: ApprovedTransacationsComponent;
  let fixture: ComponentFixture<ApprovedTransacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedTransacationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedTransacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
