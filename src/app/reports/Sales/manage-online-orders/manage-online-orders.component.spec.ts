import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOnlineOrdersComponent } from './manage-online-orders.component';

describe('ManageOnlineOrdersComponent', () => {
  let component: ManageOnlineOrdersComponent;
  let fixture: ComponentFixture<ManageOnlineOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageOnlineOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOnlineOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
