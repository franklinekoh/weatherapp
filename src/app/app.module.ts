import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {HomeService} from './home.service';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { WeathersearchComponent } from './weathersearch/weathersearch.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherdetailsComponent,
    WeathersearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
