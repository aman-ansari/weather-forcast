import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LocalWeatherReportComponent } from './local-weather-report/local-weather-report.component';
import { SeaForecastReportComponent } from './sea-forecast-report/sea-forecast-report.component';
import { WeatherReportDayComponent } from './weather-report-day/weather-report-day.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocalWeatherReportComponent,
    SeaForecastReportComponent,
    WeatherReportDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
