import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpChargeComponent } from './ip-charge.component';

describe('IpChargeComponent', () => {
  let component: IpChargeComponent;
  let fixture: ComponentFixture<IpChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
