import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service'
import { LocationService } from '../../location.service'

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {
geoLocation: any = {};
  weather: any = [];
  iconImg: string = '';
  selectedIndex: any = null;
  
  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService
  ) {}

  ngOnInit(): void {
    this._geoLocation.getCity().subscribe((data: any) => {
      this.geoLocation = data;
      this._weather
          .getHourly(this.geoLocation.coords.latitude, this.geoLocation.coords.longitude)
          .subscribe((data: any) => {
            this.weather = data['data'];
      });
    });

   
  }

  setIndex(index: any) {
    this.selectedIndex = index
          
   }




}
