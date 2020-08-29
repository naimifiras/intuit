import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";

@Injectable()
export class ForexService {
  constructor(private _httpClient: HttpClient) { }

  getIntradayExchangeRate(fromCurrencySymbol: string, toCurrencySymbol: string): Observable<any[]> {
    return this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=${fromCurrencySymbol}&to_symbol=${toCurrencySymbol}&interval=5min&apikey=SH5VJ8C149PG8B7B&datatype=json`);
  }
  getDailyExchangeRate(fromCurrencySymbol: string, toCurrencySymbol: string): Observable<any[]> {
    return this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${fromCurrencySymbol}&to_symbol=${toCurrencySymbol}&apikey=SH5VJ8C149PG8B7B&datatype=json`);
  }
  getWeeklyExchangeRate(fromCurrencySymbol: string, toCurrencySymbol: string): Observable<any[]> {
    return this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol=${fromCurrencySymbol}&to_symbol=${toCurrencySymbol}&apikey=SH5VJ8C149PG8B7B&datatype=json`);
  }
  getMonthlyExchangeRate(fromCurrencySymbol: string, toCurrencySymbol: string): Observable<any[]> {
    return this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${fromCurrencySymbol}&to_symbol=${toCurrencySymbol}&apikey=SH5VJ8C149PG8B7B&datatype=json`);
  }
  getMonthlyForexForComparison(fromCurrencySymbol: string, toCurrencySymbols: string[]): Observable<any[]> {
    let monthlyObservables: Observable<any[]>[] = [];
    for (const symbol of toCurrencySymbols) {
      let monthlyForex = this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${fromCurrencySymbol}&to_symbol=${symbol}&apikey=SH5VJ8C149PG8B7B&datatype=json`);
      monthlyObservables.push(monthlyForex);
    }
    return forkJoin(monthlyObservables);
  }
}
