import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";

import { ForexService } from "../services/forex.service";
import { formatChartData } from "../../utilities/global-functions";

@Component({
  selector: 'monthly-forex-comparison',
  templateUrl: './monthly-forex-comparison.component.html',
  styleUrls: ['./monthly-forex-comparison.component.css']
})
export class MonthlyForexComparisonComponent implements OnInit {
  constructor(private _forexService: ForexService) { }

  Highcharts = Highcharts;
  type: string = "stockChart";
  exchangeOf: string[] = ["AED", "INR", "JPY"];
  options = {
    title: {
      text: `Monthly Exchange Rates of ${this.exchangeOf}`
    },
    rangeSelector: {
      selected: 4
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      series: {
        showInLegend: true
      }
    },
    series: []
  }
  ngOnInit(): void {
    this._forexService.getMonthlyForexForComparison("GBP", this.exchangeOf).subscribe(
      exchangeData => {
        let counter: number = 0;
        
        for (const forex of exchangeData) {
          this.options.series.push({
            id: this.exchangeOf[counter],
            name: this.exchangeOf[counter],
            data: formatChartData(forex["Time Series FX (Monthly)"])
          });
          counter++;
        }
        console.log(this.options.series)
      }
    )
  }

}
