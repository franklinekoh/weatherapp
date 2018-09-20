import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.setInstanbul();
    this.getInstabul();
   
  }

  private weatherBaseUrl = 'http://localhost/aol/weather.php';


  instanbulWeathers: Weather[];
  berlin: Weather[];
  london: Weather[];
  helsinki: Weather[];
  dublin: Weather[];
  vancouver: Weather[];

  // set url for instanbul
  setInstanbul(): void {
    this.homeService.setWeatherUrl(`${this.weatherBaseUrl}/?command=search&keyword=Istanbul`);
  }

  getInstabul(): void {
    this.homeService.getWeather()
    .subscribe(weather => this.instanbulWeathers = weather);
  }
  
}
