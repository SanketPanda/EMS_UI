import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeaveDetailsComponent } from './staff-leave-details.component';

describe('StaffLeaveDetailsComponent', () => {
  let component: StaffLeaveDetailsComponent;
  let fixture: ComponentFixture<StaffLeaveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLeaveDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffLeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
