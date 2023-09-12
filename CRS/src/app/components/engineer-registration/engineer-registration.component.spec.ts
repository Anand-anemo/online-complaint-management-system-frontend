import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerRegistrationComponent } from './engineer-registration.component';

describe('EngineerRegistrationComponent', () => {
  let component: EngineerRegistrationComponent;
  let fixture: ComponentFixture<EngineerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
