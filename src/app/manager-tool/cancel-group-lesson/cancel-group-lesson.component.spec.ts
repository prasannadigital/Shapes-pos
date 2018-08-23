import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelGroupLessonComponent } from './cancel-group-lesson.component';

describe('CancelGroupLessonComponent', () => {
  let component: CancelGroupLessonComponent;
  let fixture: ComponentFixture<CancelGroupLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelGroupLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelGroupLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
