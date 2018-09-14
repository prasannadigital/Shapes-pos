import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRelationshipComponent } from './add-new-relationship.component';

describe('AddNewRelationshipComponent', () => {
  let component: AddNewRelationshipComponent;
  let fixture: ComponentFixture<AddNewRelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
