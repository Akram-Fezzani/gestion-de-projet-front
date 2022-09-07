import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableTaskComponent } from './card-table-task.component';

describe('CardTableTaskComponent', () => {
  let component: CardTableTaskComponent;
  let fixture: ComponentFixture<CardTableTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTableTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
