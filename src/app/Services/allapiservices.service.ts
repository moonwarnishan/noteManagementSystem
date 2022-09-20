import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllapiservicesService {

  constructor() { }
  baseUrl="https://www.buytickets.com.bd/api/";

  getLocations = this.baseUrl + "Auto/GetCities/?input=";
  
  
}
