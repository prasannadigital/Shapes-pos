import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopaySummaryComponent } from './autopay-summary.component';

describe('AutopaySummaryComponent', () => {
  let component: AutopaySummaryComponent;
  let fixture: ComponentFixture<AutopaySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutopaySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopaySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
