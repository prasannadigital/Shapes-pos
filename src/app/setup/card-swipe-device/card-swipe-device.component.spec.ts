import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSwipeDeviceComponent } from './card-swipe-device.component';

describe('CardSwipeDeviceComponent', () => {
  let component: CardSwipeDeviceComponent;
  let fixture: ComponentFixture<CardSwipeDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSwipeDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSwipeDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
