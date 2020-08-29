import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { StockMenuBarComponent } from './stock-menu-bar/stock-menu-bar.component';

@NgModule({
  declarations: [StockMenuBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    StockMenuBarComponent
  ]
})
export class NavigationModule { }
