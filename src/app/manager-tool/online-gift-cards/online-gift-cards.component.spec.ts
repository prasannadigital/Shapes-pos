import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineGiftCardsComponent } from './online-gift-cards.component';

describe('OnlineGiftCardsComponent', () => {
  let component: OnlineGiftCardsComponent;
  let fixture: ComponentFixture<OnlineGiftCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineGiftCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineGiftCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
