import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCommunicationsComponent } from './test-communications.component';

describe('TestCommunicationsComponent', () => {
  let component: TestCommunicationsComponent;
  let fixture: ComponentFixture<TestCommunicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCommunicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
