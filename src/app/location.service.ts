import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})



export class LocationService {

  constructor() { }



  getCity(): Observable<Object> {
    return new Observable(observer => {
      navigator.geolocation.getCurrentPosition((res) => observer.next(res), err => observer.error(err))
    }) 
    
    //this.geoLocation.get<Object>('http://ip-api.com/json/');
              
  }


  
}
