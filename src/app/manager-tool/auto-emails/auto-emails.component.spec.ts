import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoEmailsComponent } from './auto-emails.component';

describe('AutoEmailsComponent', () => {
  let component: AutoEmailsComponent;
  let fixture: ComponentFixture<AutoEmailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoEmailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
