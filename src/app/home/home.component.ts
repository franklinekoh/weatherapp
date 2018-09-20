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
    this.setInstanbulDetail();  
    this.getWeatherDetail();  

    this.setBerlin();
    this.getBerlin();
    this.setBerlinDetail();
    this.getWeatherDetail(); 

    this.setLondon();
    this.getLondon();
    this.setLondonDetail();
    this.getWeatherDetail(); 


    this.setHelsinki();
    this.getHelsinki();
    this.setHelsinkiDetail();
    this.getWeatherDetail(); 

    this.setDublin();
    this.getDublin();
    this.setDublinDetail();
    this.getWeatherDetail(); 

    this.setVancouver();
    this.getVancouver();
    this.setVancouverDetail();
    this.getWeatherDetail(); 
    
  }

  private weatherBaseUrl = 'http://localhost/aol/weather.php';
  

  instanbulWeathers: any;
  berlin: Weather[];
  london: Weather[];
  helsinki: Weather[];
  dublin: Weather[];
  vancouver: Weather[];




  // set url for instanbul
  setInstanbul(): void {
    this.homeService.setWeatherUrl(`${this.weatherBaseUrl}?command=search&keyword=Istanbul`);
  }

  setInstanbulDetail(): void {
    this.homeService.setWeatherDetailUrl(`${this.weatherBaseUrl}/?command=location&woeid=2344116`); 
  }

  getInstabul(): void {
    this.homeService.getWeather()
    .subscribe((weather) => {

      this.instanbulWeathers = weather
    });
  }

  // set url for berlin
  setBerlin(): void {
    this.homeService.setWeatherUrl(`${this.weatherBaseUrl}?command=search&keyword=Berlin`);
  }

  setBerlinDetail(): void {
    this.homeService.setWeatherDetailUrl(`${this.weatherBaseUrl}/?command=location&woeid=638242`);
   
  }


  getBerlin(): void {
    this.homeService.getWeather()
    .subscribe((weather) => {

      this.berlin = weather

    });
  }

  setLondon(): void {
    this.homeService.setWeatherUrl(`${this.weatherBaseUrl}?command=search&keyword=London`);
  }

  setLondonDetail(): void {
    this.homeService.setWeatherDetailUrl(`${this.weatherBaseUrl}/?command=location&woeid=44418`); 
  }

  getLondon(): void {
    this.homeService.getWeather()
    .subscribe((weather) => {

      this.instanbulWeathers = weather
    });
  }


  setHelsinki(): void {
    this.homeService.setWeatherUrl(`${this.weatherBaseUrl}?command=search&keyword=Helsinki`);
  }

  setHelsinkiDetail(): void {
    this.homeService.setWeatherDetailUrl(`${this.weatherBaseUrl}/?command=location&woeid=565346`); 
  }

  getHelsinki(): void {
    this.homeService.getWeather()
    .subscribe((weather) => {

      this.helsinki = weather
    });
  }

  setDublin(): void {
    this.homeService.setWeatherUrl(`${this.weatherBaseUrl}?command=search&keyword=Dublin`);
  }

  setDublinDetail(): void {
    this.homeService.setWeatherDetailUrl(`${this.weatherBaseUrl}/?command=location&woeid=560743`);
   
  }


  getDublin(): void {
    this.homeService.getWeather()
    .subscribe((weather) => {
      this.dublin = weather
    });
  }

  setVancouver(): void {
    this.homeService.setWeatherUrl(`${this.weatherBaseUrl}?command=search&keyword=Vancouver`);
  }

  setVancouverDetail(): void {
    this.homeService.setWeatherDetailUrl(`${this.weatherBaseUrl}/?command=location&woeid=9807`);
   
  }


  getVancouver(): void {
    this.homeService.getWeather()
    .subscribe((weather) => {
      this.dublin = weather
    });
  }

  getWeatherDetail(): void{
      this.homeService.getWeatherDetails().subscribe((weatherDetail) => {
          console.log(weatherDetail);
      });
  }

  

 
}
  

