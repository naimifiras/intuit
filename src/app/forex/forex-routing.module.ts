import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntradayRealtimeForexComponent } from './intraday-realtime-forex/intraday-realtime-forex.component';
import { DailyForexComponent } from './daily-forex/daily-forex.component';
import { WeeklyForexComponent } from './weekly-forex/weekly-forex.component';
import { MonthlyForexComponent } from './monthly-forex/monthly-forex.component';
import { MonthlyForexComparisonComponent } from './monthly-forex-comparison/monthly-forex-comparison.component';


const forexRoutes: Routes = [
  {
    path: "intraday",
    component: IntradayRealtimeForexComponent
  },
  {
    path: "daily",
    component: DailyForexComponent
  },
  {
    path: "weekly",
    component: WeeklyForexComponent
  },
  {
    path: "monthly",
    component: MonthlyForexComponent
  },
  {
    path: "monthly-forex-comparison",
    component: MonthlyForexComparisonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(forexRoutes)],
  exports: [RouterModule]
})
export class ForexRoutingModule { }
