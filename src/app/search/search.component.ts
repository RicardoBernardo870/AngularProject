import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Input () weather: any = {};
@Input () input: any = '';
@Output () Input: any = this.input; 

weatherSearchForm: any = FormGroup;


  constructor(private formBuilder: FormBuilder,
    private _weather: WeatherService
    ) {}


  ngOnInit(): void {
      this.weatherSearchForm = this.formBuilder.group({
      city:''
    });
  
  }
  sendForm(formValues: any) {
    this.input = formValues
   
    this._weather
          .getWeather2(this.input.city)
          .subscribe((data: any) => {
            this.input = data['data'][0];
            console.log(this.input)
            
            
           
            
          });
}



  
}

