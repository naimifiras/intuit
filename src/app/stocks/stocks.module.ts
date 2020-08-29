import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from "highcharts-angular";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { IntradayRealtimeStocksComponent } from './intraday-realtime-stocks/intraday-realtime-stocks.component';
import { StocksService } from './services/stocks.service';

import { StocksRoutingModule } from './stocks-routing.module';
import { DailyStocksComponent } from './daily-stocks/daily-stocks.component';
import { WeeklyStocksComponent } from './weekly-stocks/weekly-stocks.component';
import { MonthlyStocksComponent } from './monthly-stocks/monthly-stocks.component';
import { MonthlyStocksComparisonComponent } from './monthly-stocks-comparison/monthly-stocks-comparison.component';



@NgModule({
  declarations: [IntradayRealtimeStocksComponent, DailyStocksComponent, WeeklyStocksComponent, MonthlyStocksComponent, MonthlyStocksComparisonComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule,
    StocksRoutingModule
  ],
  providers:[StocksService]
})
export class StocksModule { }
