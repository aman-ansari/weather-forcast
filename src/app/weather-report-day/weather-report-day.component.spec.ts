import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportDayComponent } from './weather-report-day.component';

describe('WeatherReportDayComponent', () => {
  let component: WeatherReportDayComponent;
  let fixture: ComponentFixture<WeatherReportDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReportDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherReportDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
