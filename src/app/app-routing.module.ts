import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { WeathersearchComponent } from './weathersearch/weathersearch.component';

const routes: Routes = [
  { path: '', component: WeatherComponent},
  { path: 'weather/:woeid', component: WeatherdetailsComponent},
  { path: 'search/:keyword', component: WeathersearchComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
