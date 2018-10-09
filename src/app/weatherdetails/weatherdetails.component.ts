import { Component, OnInit } from '@angular/core';
import { WeatherdetailService } from '../weatherdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {

  constructor(
    private weatherService: WeatherdetailService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getWeatherDetails();
  }

  public metaWeatherUrlBaseUrl = 'https://www.metaweather.com/static/img/weather/';
  
  private weatherBaseUrl = 'http://localhost/aol/weather.php';

  public data: any;

  getWeatherDetails(): void{
    const woeid = +this.route.snapshot.paramMap.get('woeid');
    this.weatherService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=${woeid}`).subscribe((weather) => {
     this.data = weather;
     console.log(this.data);
    });
  }

  goBack(): void{
    this.location.back();
}

}
