import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGiftCardsComponent } from './sales-gift-cards.component';

describe('SalesGiftCardsComponent', () => {
  let component: SalesGiftCardsComponent;
  let fixture: ComponentFixture<SalesGiftCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesGiftCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGiftCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
