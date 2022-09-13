import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateReportComponent } from './card-create-report.component';

describe('CardCreateReportComponent', () => {
  let component: CardCreateReportComponent;
  let fixture: ComponentFixture<CardCreateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
