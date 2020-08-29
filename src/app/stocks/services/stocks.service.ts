import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";

@Injectable()
export class StocksService {

  constructor(private _httpClient: HttpClient) { }

  getIntradayStockSeries(symbol: string): Observable<any[]> {
    return this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=SH5VJ8C149PG8B7B`);
  }
  getDailyStockSeries(symbol: string): Observable<any[]> {
    return this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=SH5VJ8C149PG8B7B`);
  }
  getWeeklyStockSeries(symbol: string): Observable<any[]> {
    return this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=SH5VJ8C149PG8B7B`);
  }
  getMonthlyStockSeries(symbol: string): Observable<any[]> {
    return this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=SH5VJ8C149PG8B7B`);
  }
  getMonthlyStocksForComparison(symbols: string[]): Observable<any[]> {
    let monthlyObservables: Observable<any[]>[] = [];
    for (const symbol of symbols) {
      let monthlySeries = this._httpClient.get<any[]>(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=SH5VJ8C149PG8B7B`);
      monthlyObservables.push(monthlySeries);
    }
    return forkJoin(monthlyObservables);
    
  }
}
