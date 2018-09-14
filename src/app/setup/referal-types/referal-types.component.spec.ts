import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalTypesComponent } from './referal-types.component';

describe('ReferalTypesComponent', () => {
  let component: ReferalTypesComponent;
  let fixture: ComponentFixture<ReferalTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
