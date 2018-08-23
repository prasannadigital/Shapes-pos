import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActiveGiftCardComponent } from './view-active-gift-card.component';

describe('ViewActiveGiftCardComponent', () => {
  let component: ViewActiveGiftCardComponent;
  let fixture: ComponentFixture<ViewActiveGiftCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActiveGiftCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActiveGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
