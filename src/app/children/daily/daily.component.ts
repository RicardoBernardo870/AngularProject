import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/location.service';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  geoLocation: any = {};
  weather: any = [];
  iconImg: string = '';
  

  
  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
  ) {}

  ngOnInit(): void {
    this._geoLocation.getCity().subscribe((data: any) => {
      this.geoLocation = data;
      this._weather
          .getDaily(this.geoLocation.coords.latitude, this.geoLocation.coords.longitude)
          .subscribe((data: any) => {
            this.weather = data['data'];
            
            
            

            
          });
    });

  
      
  
  }
}
