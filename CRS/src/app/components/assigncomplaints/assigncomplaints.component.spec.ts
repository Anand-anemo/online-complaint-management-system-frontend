import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigncomplaintsComponent } from './assigncomplaints.component';

describe('AssigncomplaintsComponent', () => {
  let component: AssigncomplaintsComponent;
  let fixture: ComponentFixture<AssigncomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigncomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigncomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
