import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcChargeComponent } from './pc-charge.component';

describe('PcChargeComponent', () => {
  let component: PcChargeComponent;
  let fixture: ComponentFixture<PcChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
