import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseOutDataComponent } from './close-out-data.component';

describe('CloseOutDataComponent', () => {
  let component: CloseOutDataComponent;
  let fixture: ComponentFixture<CloseOutDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseOutDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseOutDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
