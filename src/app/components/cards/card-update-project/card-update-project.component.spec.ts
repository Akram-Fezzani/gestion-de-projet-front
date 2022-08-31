import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUpdateProjectComponent } from './card-update-project.component';

describe('CardUpdateProjectComponent', () => {
  let component: CardUpdateProjectComponent;
  let fixture: ComponentFixture<CardUpdateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUpdateProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUpdateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
