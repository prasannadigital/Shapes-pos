import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvsComponent } from './svs.component';

describe('SvsComponent', () => {
  let component: SvsComponent;
  let fixture: ComponentFixture<SvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
