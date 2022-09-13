import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableReportComponent } from './card-table-report.component';

describe('CardTableReportComponent', () => {
  let component: CardTableReportComponent;
  let fixture: ComponentFixture<CardTableReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTableReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTableReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
