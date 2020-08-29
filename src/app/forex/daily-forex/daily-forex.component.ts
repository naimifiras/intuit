import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from "highcharts/highstock";

import { ForexService } from "../services/forex.service";
import { formatChartData } from "../../utilities/global-functions";
import { countriesCurrencyList } from "../countries-currency-list";

@Component({
  selector: 'daily-forex',
  templateUrl: './daily-forex.component.html',
  styleUrls: ['./daily-forex.component.css']
})
export class DailyForexComponent implements OnInit {
  constructor(private _forexService: ForexService) { }
  Highcharts = Highcharts;
  type: string = "stockChart";
  dailyExchangeRates: any[];
  @ViewChild("inputFromCurrency", { static: true }) inputFromCurrency: ElementRef;
  @ViewChild("inputToCurrency", { static: true }) inputToCurrency: ElementRef;
  fromCurrency: string = "USD";
  toCurrency: string = "INR";
  updateFlag: boolean = false;
  currencyList = countriesCurrencyList;
  closingPrice: number = 0;
  options = {
    title: {
      text: `Exchange Rates of ${this.fromCurrency} to ${this.toCurrency}`
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
        id: `${this.fromCurrency} to ${this.toCurrency}`,
        name: `Exchange rates of ${this.fromCurrency} to ${this.toCurrency}`,
        data: null
      }
    ]
  }

  ngOnInit(): void {
    this._forexService.getDailyExchangeRate(this.fromCurrency, this.toCurrency).subscribe(
      exchangeData => {
        this.dailyExchangeRates = formatChartData(exchangeData["Time Series FX (Daily)"]);
        this.options.series[0].data = this.dailyExchangeRates;
        this.closingPrice = this.dailyExchangeRates[this.dailyExchangeRates.length - 1][4];
      }
    )
  }
  onCurrencyChange(): void {
    if (this.inputFromCurrency.nativeElement.value == "" || this.inputFromCurrency.nativeElement.value == null) {
      this.fromCurrency = "USD";
    }
    else {
      this.fromCurrency = this.inputFromCurrency.nativeElement.value;
    }
    if (this.inputToCurrency.nativeElement.value == "" || this.inputToCurrency.nativeElement.value == null) {
      this.toCurrency = "INR";
    }
    else {
      this.toCurrency = this.inputToCurrency.nativeElement.value;
    }
    this._forexService.getDailyExchangeRate(this.fromCurrency, this.toCurrency).subscribe(
      exchangeData => {
        this.dailyExchangeRates = formatChartData(exchangeData["Time Series FX (Daily)"]);
        if (this.dailyExchangeRates.length > 0) {
          this.updateFlag = true;
          this.options.series[0].id = `${this.fromCurrency} to ${this.toCurrency}`;
          this.options.series[0].name = `Exchange rates of ${this.fromCurrency} to ${this.toCurrency}`;
          this.options.series[0].data = this.dailyExchangeRates;
          this.options.title.text = `Exchange Rates of ${this.fromCurrency} to ${this.toCurrency}`;
          this.closingPrice = this.dailyExchangeRates[this.dailyExchangeRates.length - 1][4];
        }

      }
    )
  }
}
