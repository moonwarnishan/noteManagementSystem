import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchServiceService } from 'src/app/Services/search-service.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  
  keyword = 'SearchString';
  airports:any[]=[];
  consumeData : any;
  response : any;
  SearchFlightForm : FormGroup
  timeout :any=null;

  anotherform : FormGroup;
  //keyword = 'name';
  constructor(
    private formBuilder : FormBuilder,
    private searchService : SearchServiceService
  ) { 
    this.SearchFlightForm=this.formBuilder.group({
      Origin: ['',Validators.required],
      Destination : ['',Validators.required],
      DepartureDate :['',Validators.required],
      JourneyType:[1,Validators.required],
      ClassType:['',Validators.required],
      NoOfInfant:['',Validators.required],
      NoOfChildren:['',Validators.required],
      NoOfAdult:['',Validators.required],
      ReturnDate:['']
    });
  }

  ngOnInit(): void {
  }
    onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.executeListing(event.target.value);
      }
    }, 1000);
  }

  private executeListing(value: string) {
    this.searchService.consumeAirportData(value).subscribe((data : any)=>
      this.airports=data
    )
  }


  onSubmit()
  {
    Object.assign(this.SearchFlightForm.value,{Origin:this.SearchFlightForm.value.Origin['AirportCode']});
    Object.assign(this.SearchFlightForm.value,{Destination:this.SearchFlightForm.value.Destination['AirportCode']});
    this.searchService.postFlightDetails(this.SearchFlightForm.value).subscribe((res)=>
        this.consumeData=res
      );
  }

}
