import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryChangeLogComponent } from './inventory-change-log.component';

describe('InventoryChangeLogComponent', () => {
  let component: InventoryChangeLogComponent;
  let fixture: ComponentFixture<InventoryChangeLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryChangeLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryChangeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
