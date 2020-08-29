import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  img1:string="images/daily-stocks.png";
  img2:string="images/monthly-stocks-comparison.png";
  img3:string="images/weekly-exchange-rates.png";
  img4:string="images/forex-comparison.png";
  img5:string="images/highcharts-chart.png";
  ngOnInit() {
  }
}
