import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntradayRealtimeStocksComponent } from './intraday-realtime-stocks/intraday-realtime-stocks.component';
import { DailyStocksComponent } from './daily-stocks/daily-stocks.component';
import { WeeklyStocksComponent } from './weekly-stocks/weekly-stocks.component';
import { MonthlyStocksComponent } from './monthly-stocks/monthly-stocks.component';
import { MonthlyStocksComparisonComponent } from './monthly-stocks-comparison/monthly-stocks-comparison.component';




const stocksRoutes: Routes = [
  {
    path:"intraday",
    component:IntradayRealtimeStocksComponent
  },
  {
    path:"daily",
    component:DailyStocksComponent
  },
  {
    path:"weekly",
    component:WeeklyStocksComponent
  },
  {
    path:"monthly",
    component:MonthlyStocksComponent
  },
  {
    path:"monthly-stocks-comparison",
    component:MonthlyStocksComparisonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(stocksRoutes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
