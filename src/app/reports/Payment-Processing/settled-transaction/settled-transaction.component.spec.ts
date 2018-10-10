import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettledTransactionComponent } from './settled-transaction.component';

describe('SettledTransactionComponent', () => {
  let component: SettledTransactionComponent;
  let fixture: ComponentFixture<SettledTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettledTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettledTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
