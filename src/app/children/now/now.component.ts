
import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/location.service';
import { WeatherService } from 'src/app/weather.service';


@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {
  geoLocation: any = {};
  weather: any = {};
  parseInt = parseInt
  iconImg: string = '';
  num: number = 3.6;
  description: any = '';
  wind: any = '';
  today: any = new Date();
  

  
  
  
  

  
  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
    
    
  ) {}

  ngOnInit(): void {
    this._geoLocation.getCity().subscribe((data: any) => {
      this.geoLocation = data;
      this._weather
          .getWeather(this.geoLocation.coords.latitude, this.geoLocation.coords.longitude)
          .subscribe((data: any) => {
            this.weather = data['data'][0];
            let icon = data['data'][0].weather.icon;
            this.iconImg = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
            let description = data['data'][0].weather.description
            this.description = description
           

            
          });
      });
    }
}