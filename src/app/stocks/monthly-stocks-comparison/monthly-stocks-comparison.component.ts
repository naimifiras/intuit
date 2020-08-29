import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";

import { StocksService } from "../services/stocks.service";
import { formatChartData } from "../../utilities/global-functions";

@Component({
  selector: 'monthly-stocks-comparison',
  templateUrl: './monthly-stocks-comparison.component.html',
  styleUrls: ['./monthly-stocks-comparison.component.css']
})
export class MonthlyStocksComparisonComponent implements OnInit {

  constructor(private _stocksService: StocksService) { }
  Highcharts = Highcharts;
  type: string = "stockChart";
  companies: string[] = ["AAPL", "FB", "MSFT"];
  options = {
    title: {
      text: `Monthly Stocks Comparison of ${this.companies}`
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
    this._stocksService.getMonthlyStocksForComparison(this.companies).subscribe(
      stocksData => {
        let counter: number = 0;
        for (const stock of stocksData) {
          this.options.series.push({
            id: this.companies[counter],
            name: this.companies[counter],
            data: formatChartData(stock["Monthly Time Series"])
          });
          counter++;
        }
      }
    )
  }

}
