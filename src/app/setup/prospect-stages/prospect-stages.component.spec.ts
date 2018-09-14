import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectStagesComponent } from './prospect-stages.component';

describe('ProspectStagesComponent', () => {
  let component: ProspectStagesComponent;
  let fixture: ComponentFixture<ProspectStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
