import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersSetupComponent } from './suppliers-setup.component';

describe('SuppliersSetupComponent', () => {
  let component: SuppliersSetupComponent;
  let fixture: ComponentFixture<SuppliersSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
