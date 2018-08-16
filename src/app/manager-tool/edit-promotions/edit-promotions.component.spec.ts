import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPromotionsComponent } from './edit-promotions.component';

describe('EditPromotionsComponent', () => {
  let component: EditPromotionsComponent;
  let fixture: ComponentFixture<EditPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
