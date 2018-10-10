import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidedorrejectedComponent } from './voidedorrejected.component';

describe('VoidedorrejectedComponent', () => {
  let component: VoidedorrejectedComponent;
  let fixture: ComponentFixture<VoidedorrejectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoidedorrejectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidedorrejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
