import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPerStylistComponent } from './client-per-stylist.component';

describe('ClientPerStylistComponent', () => {
  let component: ClientPerStylistComponent;
  let fixture: ComponentFixture<ClientPerStylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPerStylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPerStylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
