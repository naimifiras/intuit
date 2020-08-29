import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from "highcharts/highstock";

import { ForexService } from "../services/forex.service";
import { formatChartData } from "../../utilities/global-functions";
import { countriesCurrencyList } from "../countries-currency-list";

@Component({
  selector: 'monthly-forex',
  templateUrl: './monthly-forex.component.html',
  styleUrls: ['./monthly-forex.component.css']
})
export class MonthlyForexComponent implements OnInit {
  constructor(private _forexService: ForexService) { }
  Highcharts = Highcharts;
  type: string = "stockChart";
  monthlyExchangeRates: any[];
  @ViewChild("inputFromCurrency", { static: true }) inputFromCurrency: ElementRef;
  @ViewChild("inputToCurrency", { static: true }) inputToCurrency: ElementRef;
  fromCurrency: string = "USD";
  toCurrency: string = "INR";
  updateFlag: boolean = false;
  currencyList = countriesCurrencyList;
  closingPrice: number = 0;
  options = {
    chart:{
      type:"candlestick"
    },
    title: {
      text: `Monthly Exchange Rates of ${this.fromCurrency} to ${this.toCurrency}`
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
        name: `Monthly Exchange rates of ${this.fromCurrency} to ${this.toCurrency}`,
        data: null
      }
    ]
  }

  ngOnInit(): void {
    this._forexService.getMonthlyExchangeRate(this.fromCurrency, this.toCurrency).subscribe(
      exchangeData => {
        this.monthlyExchangeRates = formatChartData(exchangeData["Time Series FX (Monthly)"]);
        this.options.series[0].data = this.monthlyExchangeRates;
        this.closingPrice = this.monthlyExchangeRates[this.monthlyExchangeRates.length - 1][4];
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
    this._forexService.getMonthlyExchangeRate(this.fromCurrency, this.toCurrency).subscribe(
      exchangeData => {
        this.monthlyExchangeRates = formatChartData(exchangeData["Time Series FX (Monthly)"]);
        if (this.monthlyExchangeRates.length > 0) {
          this.updateFlag = true;
          this.options.series[0].id = `${this.fromCurrency} to ${this.toCurrency}`;
          this.options.series[0].name = `Monthly Exchange rates of ${this.fromCurrency} to ${this.toCurrency}`;
          this.options.series[0].data = this.monthlyExchangeRates;
          this.options.title.text = `Monthly Exchange Rates of ${this.fromCurrency} to ${this.toCurrency}`;
          this.closingPrice = this.monthlyExchangeRates[this.monthlyExchangeRates.length - 1][4];
        }
      }
    )
  }
}