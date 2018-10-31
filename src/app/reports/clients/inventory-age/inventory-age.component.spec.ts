import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAgeComponent } from './inventory-age.component';

describe('InventoryAgeComponent', () => {
  let component: InventoryAgeComponent;
  let fixture: ComponentFixture<InventoryAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
