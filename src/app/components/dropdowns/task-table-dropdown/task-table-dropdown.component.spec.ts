import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTableDropdownComponent } from './task-table-dropdown.component';

describe('TaskTableDropdownComponent', () => {
  let component: TaskTableDropdownComponent;
  let fixture: ComponentFixture<TaskTableDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTableDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTableDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
