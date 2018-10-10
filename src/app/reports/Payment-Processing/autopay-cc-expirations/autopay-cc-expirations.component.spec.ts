import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopayCcExpirationsComponent } from './autopay-cc-expirations.component';

describe('AutopayCcExpirationsComponent', () => {
  let component: AutopayCcExpirationsComponent;
  let fixture: ComponentFixture<AutopayCcExpirationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutopayCcExpirationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutopayCcExpirationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
