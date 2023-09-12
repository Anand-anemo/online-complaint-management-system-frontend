import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerComplaintsComponent } from './engineer-complaints.component';

describe('EngineerComplaintsComponent', () => {
  let component: EngineerComplaintsComponent;
  let fixture: ComponentFixture<EngineerComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
