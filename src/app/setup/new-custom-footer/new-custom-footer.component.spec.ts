import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomFooterComponent } from './new-custom-footer.component';

describe('NewCustomFooterComponent', () => {
  let component: NewCustomFooterComponent;
  let fixture: ComponentFixture<NewCustomFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCustomFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
