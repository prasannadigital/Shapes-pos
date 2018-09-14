import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSwipeSettingsComponent } from './card-swipe-settings.component';

describe('CardSwipeSettingsComponent', () => {
  let component: CardSwipeSettingsComponent;
  let fixture: ComponentFixture<CardSwipeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSwipeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSwipeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
