import { Component, Input, OnInit, Output } from '@angular/core';
import { LocationService } from '../location.service';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  geoLocation: any = {};
  @Input() weather: any = {};
  iconImg: string = '';
  data: any;
  

  
  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
  ) {}

  ngOnInit(): void {
    this._geoLocation.getCity().subscribe((data: any) => {
      this.geoLocation = data;
      console.log(this.geoLocation)
      this._weather
          .getWeather(this.geoLocation.coords.latitude, this.geoLocation.coords.longitude)
          .subscribe((data: any) => {
            this.weather = data['data'][0];
            let icon = data['data'][0].weather.icon;
            this.iconImg = `https://www.weatherbit.io/static/img/icons/${icon}.png`
            
            
          });

        
    });

  
      
  
  }


}
