import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private route: Router,
  ) { }

  ngOnInit() {
    
    this.getInstabul();
    this.getBerlin();
    this.getHelsinki();
    this.getDublin();
    this.getVancour();
    this.getLondon();

    
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
     
    });
  }

  getBerlin(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=638242`).subscribe((weather) => {
      this.berlin = weather;
    
    });
  }
 
  getHelsinki(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=565346`).subscribe((weather) => {
      this.helsinki = weather;
     
    });
  }

  getDublin(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=560743`).subscribe((weather) => {
      this.dublin = weather;
      
    });
  }

  getVancour(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=9807`).subscribe((weather) => {
      this.vancouver = weather;
   
    });
  }

  getLondon(): void{
    this.homeService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=44418`).subscribe((weather) => {
           this.london = weather;
         
        });
  }

  search(keyword: string): void{
    
    // const url = `search/${keyword}`;
    this.route.navigate(['search', keyword]);
     
  }
 
}
  

