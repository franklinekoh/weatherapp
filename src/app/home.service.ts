import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Weather } from './weather';
import { Observable, of } from 'rxjs';
// import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
export class HomeService {

  

  constructor(private http: HttpClient) { }

  private weatherBaseUrl = 'http://localhost/aol/weather.php';

  getWeather(): Observable<any>{

    return this.http.get<any>(this.getWeatherUrl())
    .pipe(
      tap((weather) =>{
        console.log(weather || 'not working')
     
      } ,
      catchError(this.handleError('getWeather', []))
      
    )
    );


  }

  getWeatherDetails(): Observable<any>{

    return this.http.get(this.getWeatherDetailUrl()).pipe(
      tap(weatherDetail => weatherDetail),
      catchError(this.handleError('getWeather', []))
    );

  }
    public weatherUrl: string;
    public weatherDetailUrl: string;
    
  setWeatherUrl(weatherUrl: string): void{
      this.weatherUrl = weatherUrl;
  }

  setWeatherDetailUrl(weatherDetailUrl: string): void{
    this.weatherDetailUrl = weatherDetailUrl;
}

  getWeatherUrl(): string{
    return this.weatherUrl;
  }

  getWeatherDetailUrl(): string{
    return this.weatherDetailUrl;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
