import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUpdateTaskComponent } from './card-update-task.component';

describe('CardUpdateTaskComponent', () => {
  let component: CardUpdateTaskComponent;
  let fixture: ComponentFixture<CardUpdateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUpdateTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
