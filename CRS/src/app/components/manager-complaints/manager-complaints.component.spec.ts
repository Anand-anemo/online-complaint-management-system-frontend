import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComplaintsComponent } from './manager-complaints.component';

describe('ManagerComplaintsComponent', () => {
  let component: ManagerComplaintsComponent;
  let fixture: ComponentFixture<ManagerComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
