import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts/highstock";

import { StocksService } from "../services/stocks.service";
import { formatChartData } from "../../utilities/global-functions";
import { stockCompaniesList } from "../stock-companies-list";

@Component({
  selector: 'monthly-stocks',
  templateUrl: './monthly-stocks.component.html',
  styleUrls: ['./monthly-stocks.component.css']
})
export class MonthlyStocksComponent implements OnInit {

  constructor(private _stocksService: StocksService) { }
  Highcharts = Highcharts;
  type: string = "stockChart";
  monthlyStocks: any[];
  updateFlag: boolean = false;
  selectedCompany: string = "AAPL";
  companyList: any[] = stockCompaniesList;
  errorMessage: string = "";
  closingPrice: number = 0;
  options = {
    title: {
      text: `Monthly Stocks of ${this.selectedCompany}`
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
    series: [
      {
        id: `${this.selectedCompany}`,
        name: `${this.selectedCompany} Stock Price`,
        data: null,
        type: "line",
        color: {
          linearGradient: {
            x1:0,
            x2:0,
            y1:0,
            y2:1
          },
          stops:[
            [0,"#003399"],
            [1,"@ff66AA"]
          ]
        }
      }
    ]
  }
  ngOnInit(): void {
    this._stocksService.getMonthlyStockSeries(this.selectedCompany).subscribe(
      stocksData => {
        this.monthlyStocks = formatChartData(stocksData["Monthly Time Series"]);
        this.closingPrice = this.monthlyStocks[this.monthlyStocks.length - 1][4];
        this.options.series[0].data = this.monthlyStocks;
      }
    )
  }
  onValueChange(e): void {
    if (e.target.value == "" || e.target.value == null) {
      this.selectedCompany = "AAPL";
    }
    else {
      this.selectedCompany = e.target.value;
    }
    console.log(e.target.value)
    this.errorMessage = "";
    this._stocksService.getMonthlyStockSeries(this.selectedCompany).subscribe(
      stocksData => {
        this.monthlyStocks = formatChartData(stocksData["Monthly Time Series"]);
        if (this.monthlyStocks.length > 0) {
          this.closingPrice = this.monthlyStocks[this.monthlyStocks.length - 1][4];
          this.options.title.text = `Monthly Stocks of ${this.selectedCompany}`;
          this.updateFlag = true;
          this.options.series[0].id = this.selectedCompany;
          this.options.series[0].name = `${this.selectedCompany} Stock Price`;
          this.options.series[0].data = this.monthlyStocks;
        }
        else {
          this.errorMessage = "Sorry!! The company does not exists or the stock information is not available!";
        }
      }
    )
  }

}
