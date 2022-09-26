import { Injectable } from '@angular/core';
import { AllapiservicesService } from './allapiservices.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(
    private allapiService : AllapiservicesService,
    private http : HttpClient ) {
      
     }
     consumeAirportData(data : any)
     {
      return this.http.get(this.allapiService.getLocations+data);
     }

     //post flight details
     postFlightDetails(data : any)
     {
        return this.http.post(this.allapiService.postLocation,data);
     }

}
