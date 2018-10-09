import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherdetailService {

  constructor(private http: HttpClient) { }

  getWeatherDetails(weatherDetailUrl: string): Observable<any>{

    return this.http.get(weatherDetailUrl).pipe(
      tap(weatherDetail => weatherDetail),
      catchError(this.handleError('getWeather', []))
    );

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
