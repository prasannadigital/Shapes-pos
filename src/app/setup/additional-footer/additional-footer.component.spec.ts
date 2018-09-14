import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFooterComponent } from './additional-footer.component';

describe('AdditionalFooterComponent', () => {
  let component: AdditionalFooterComponent;
  let fixture: ComponentFixture<AdditionalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
