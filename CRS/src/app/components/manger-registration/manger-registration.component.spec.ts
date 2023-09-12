import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerRegistrationComponent } from './manger-registration.component';

describe('MangerRegistrationComponent', () => {
  let component: MangerRegistrationComponent;
  let fixture: ComponentFixture<MangerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
