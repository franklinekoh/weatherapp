import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-home',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private location: Location,
    private route: Router,
  ) { }

  ngOnInit() {
    
    this.getInstabul();
    this.getBerlin();
    this.getHelsinki();
    this.getDublin();
    this.getVancour();
    this.getLondon();

    // console.log(this.weathers);
    
  }

  private weatherBaseUrl = 'http://localhost/aol/weather.php';

  public metaWeatherUrlBaseUrl = 'https://www.metaweather.com/static/img/weather/';
  

  public instanbul: any;
  public berlin: any;
  public london: any;
  public helsinki: any;
  public dublin: any;
  public vancouver: any;
  public weathers: any;

  getInstabul(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=2344116`).subscribe((weather) => {
      this.instanbul = weather;
      this.weathers.push(weather);
     
    });
  }

  getBerlin(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=638242`).subscribe((weather) => {
      this.berlin = weather;
      this.weathers.push(weather);
    });
  }
 
  getHelsinki(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=565346`).subscribe((weather) => {
      this.helsinki = weather;
      this.weathers.push(weather);
    });
  }

  getDublin(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=560743`).subscribe((weather) => {
      this.dublin = weather;
      this.weathers.push(weather);
    });
  }

  getVancour(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=9807`).subscribe((weather) => {
      this.vancouver = weather;
      this.weathers.push(weather);
    });
  }

  getLondon(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=44418`).subscribe((weather) => {
           this.london = weather;
           this.weathers.push(weather);
        });
  }

  search(keyword: string): void{
    
    const url = `search/${keyword}`;
    this.route.navigate([url]);
     
  }
 
}
  

