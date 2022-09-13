import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUpdateReportComponent } from './card-update-report.component';

describe('CardUpdateReportComponent', () => {
  let component: CardUpdateReportComponent;
  let fixture: ComponentFixture<CardUpdateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUpdateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUpdateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
