import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAffectempComponent } from './card-affectemp.component';

describe('CardAffectempComponent', () => {
  let component: CardAffectempComponent;
  let fixture: ComponentFixture<CardAffectempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAffectempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAffectempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
