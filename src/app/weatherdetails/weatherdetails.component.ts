import { Component, OnInit, Input } from '@angular/core';
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
  
  @Input() keyword: string;

  getWeatherDetails(): void{
   
  
   if(this.keyword == undefined){
        var woeid = this.route.snapshot.paramMap.get('woeid');
   }else{
    

    switch(this.keyword.toLowerCase()){

      case 'dublin': {

        var woeid = '560743';
        break;
      }

      case 'berlin': {
        var woeid = '638242';
        break;
      }

      case 'london': {
        var woeid = '44418';
        break;
      }

      case 'helsinki': {
        var woeid = '565346';
        break;
      }

      case 'instanbul': {
        var woeid = '2344116';
        break;
      }

      case 'vancour': {
        var woeid = '9807';
        break;
      }

      default: {
        alert('No results where found');
      }
    }
   }

   console.log(this.keyword);
    this.weatherService.getWeatherDetails(`${this.weatherBaseUrl}/?command=location&woeid=${woeid}`).subscribe((weather) => {
     this.data = weather;
    //  console.log(this.data);
    });
  }

  goBack(): void{
    this.location.back();
}

}
