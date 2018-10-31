import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReportsRatingsReviewsComponent } from './client-reports-ratings-reviews.component';

describe('ClientReportsRatingsReviewsComponent', () => {
  let component: ClientReportsRatingsReviewsComponent;
  let fixture: ComponentFixture<ClientReportsRatingsReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReportsRatingsReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReportsRatingsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
