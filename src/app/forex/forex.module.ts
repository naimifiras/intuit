import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from "highcharts-angular";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ForexService } from './services/forex.service';

import { IntradayRealtimeForexComponent } from './intraday-realtime-forex/intraday-realtime-forex.component';

import { ForexRoutingModule } from './forex-routing.module';
import { DailyForexComponent } from './daily-forex/daily-forex.component';
import { WeeklyForexComponent } from './weekly-forex/weekly-forex.component';
import { MonthlyForexComponent } from './monthly-forex/monthly-forex.component';
import { MonthlyForexComparisonComponent } from './monthly-forex-comparison/monthly-forex-comparison.component';


@NgModule({
  declarations: [IntradayRealtimeForexComponent, DailyForexComponent, WeeklyForexComponent, MonthlyForexComponent, MonthlyForexComparisonComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule,
    ForexRoutingModule
  ],
  providers:[
    ForexService
  ]
})
export class ForexModule { }
