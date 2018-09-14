import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIndexValueComponent } from './client-index-value.component';

describe('ClientIndexValueComponent', () => {
  let component: ClientIndexValueComponent;
  let fixture: ComponentFixture<ClientIndexValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientIndexValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIndexValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
