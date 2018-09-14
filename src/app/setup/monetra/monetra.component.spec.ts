import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetraComponent } from './monetra.component';

describe('MonetraComponent', () => {
  let component: MonetraComponent;
  let fixture: ComponentFixture<MonetraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonetraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
