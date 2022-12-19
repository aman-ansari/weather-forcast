import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalWeatherReportComponent } from './local-weather-report.component';

describe('LocalWeatherReportComponent', () => {
  let component: LocalWeatherReportComponent;
  let fixture: ComponentFixture<LocalWeatherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalWeatherReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalWeatherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
