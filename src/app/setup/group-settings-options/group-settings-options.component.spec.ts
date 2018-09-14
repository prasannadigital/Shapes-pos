import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSettingsOptionsComponent } from './group-settings-options.component';

describe('GroupSettingsOptionsComponent', () => {
  let component: GroupSettingsOptionsComponent;
  let fixture: ComponentFixture<GroupSettingsOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSettingsOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSettingsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
