import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from "highcharts/highstock";

import { ForexService } from "../services/forex.service";
import { formatChartData } from "../../utilities/global-functions";
import { countriesCurrencyList } from "../countries-currency-list";

@Component({
  selector: 'weekly-forex',
  templateUrl: './weekly-forex.component.html',
  styleUrls: ['./weekly-forex.component.css']
})
export class WeeklyForexComponent implements OnInit {
  constructor(private _forexService: ForexService) { }
  Highcharts = Highcharts;
  type: string = "stockChart";
  weeklyExchangeRates: any[];
  @ViewChild("inputFromCurrency", { static: true }) inputFromCurrency: ElementRef;
  @ViewChild("inputToCurrency", { static: true }) inputToCurrency: ElementRef;
  fromCurrency: string = "USD";
  toCurrency: string = "INR";
  updateFlag: boolean = false;
  currencyList = countriesCurrencyList;
  closingPrice: number = 0;
  options = {
    title: {
      text: `Weekly Exchange Rates of ${this.fromCurrency} to ${this.toCurrency}`
    },
    rangeSelector: {
      selected: 4
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      series: {
        showInLegend: true,
        marker: {
          radius: 8
        }
      }
    },
    series: [
      {
        id: `${this.fromCurrency} to ${this.toCurrency}`,
        name: `Weekly Exchange rates of ${this.fromCurrency} to ${this.toCurrency}`,
        data: null,
        tooltip: {
          valueDecimals: 2
        },
        step:true
      }
    ]
  }

  ngOnInit(): void {
    this._forexService.getWeeklyExchangeRate(this.fromCurrency, this.toCurrency).subscribe(
      exchangeData => {
        this.weeklyExchangeRates = formatChartData(exchangeData["Time Series FX (Weekly)"]);
        this.options.series[0].data = this.weeklyExchangeRates;
        this.closingPrice = this.weeklyExchangeRates[this.weeklyExchangeRates.length - 1][4];
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
    this._forexService.getWeeklyExchangeRate(this.fromCurrency, this.toCurrency).subscribe(
      exchangeData => {
        this.weeklyExchangeRates = formatChartData(exchangeData["Time Series FX (Weekly)"]);
        if (this.weeklyExchangeRates.length > 0) {
          this.updateFlag = true;
          this.options.series[0].id = `${this.fromCurrency} to ${this.toCurrency}`;
          this.options.series[0].name = `Weekly Exchange rates of ${this.fromCurrency} to ${this.toCurrency}`;
          this.options.series[0].data = this.weeklyExchangeRates;
          this.options.title.text = `Weekly Exchange Rates of ${this.fromCurrency} to ${this.toCurrency}`;
          this.closingPrice = this.weeklyExchangeRates[this.weeklyExchangeRates.length - 1][4];
        }

      }
    )
  }
}
