import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAffectManagerComponent } from './card-affect-manager.component';

describe('CardAffectManagerComponent', () => {
  let component: CardAffectManagerComponent;
  let fixture: ComponentFixture<CardAffectManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAffectManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAffectManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
