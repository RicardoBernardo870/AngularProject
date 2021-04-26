import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 


  public API: any = 'b5daed88854f4ddeb95522c19ac2316b'

  constructor(private weather: HttpClient,
              private daily: HttpClient,
              private hourly: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<Object> {
    return this.weather.get<Object>(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${this.API}&include=minutely`
      
    );
  }
  getWeather2(city: string): Observable<Object> {
    return this.weather.get<Object>(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${this.API}`
      
    );
  }


 getDaily(lat: number, lon:number): Observable<Object> {
    return this.daily.get<Object>(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&days=10&key=${this.API}`)
  }

  getHourly(lat: number, lon: number): Observable<Object> {
    return this.hourly.get<Object>(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lon}&hourly=&key=${this.API}`)
  }



}



