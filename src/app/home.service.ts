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


  getWeather(): Observable<Weather[]>{

    return this.http.get<Weather[]>(this.getWeatherUrl()).pipe(
      tap(weather => console.log(weather)),
      catchError(this.handleError('getWeather', []))
    );
  }
    public weatherUrl: string
    
  setWeatherUrl(weatherUrl: string): void{
      this.weatherUrl = weatherUrl;
  }

  getWeatherUrl(): string{
    return this.weatherUrl;
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
