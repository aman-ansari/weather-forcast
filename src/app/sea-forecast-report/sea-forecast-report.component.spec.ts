import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaForecastReportComponent } from './sea-forecast-report.component';

describe('SeaForecastReportComponent', () => {
  let component: SeaForecastReportComponent;
  let fixture: ComponentFixture<SeaForecastReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaForecastReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaForecastReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
