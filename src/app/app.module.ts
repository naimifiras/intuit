import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }