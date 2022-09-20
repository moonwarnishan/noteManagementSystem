import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchServiceService } from 'src/app/Services/search-service.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  public countries = [
    {
      id: 1,
      name: 'Albania',
    },
    {
      id: 2,
      name: 'Belgium',
    },
    {
      id: 3,
      name: 'Denmark',
    },
    {
      id: 4,
      name: 'Montenegro',
    },
    {
      id: 5,
      name: 'Turkey',
    },
    {
      id: 6,
      name: 'Ukraine',
    },
    {
      id: 7,
      name: 'Macedonia',
    },
    {
      id: 8,
      name: 'Slovenia',
    },
    {
      id: 9,
      name: 'Georgia',
    },
    {
      id: 10,
      name: 'India',
    },
    {
      id: 11,
      name: 'Russia',
    },
    {
      id: 12,
      name: 'Switzerland',
    }
  ];




  SearchFlightForm : FormGroup
  timeout :any=null;
  airports : any[]=[];
  keyword = 'name';
  constructor(
    private formBuilder : FormBuilder,
    private searchService : SearchServiceService
  ) { 
    this.SearchFlightForm=this.formBuilder.group({
      Origin : ['',Validators.required],
      Destination : ['',Validators.required],
      DepartureDate :['',Validators.required],
      ClassType:['',Validators.required],
      NoOfInfant:['',Validators.required],
      NoOfChildren:['',Validators.required],
      NoOfAdult:['',Validators.required]
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
    alert(JSON.stringify(this.airports));
  }
  onSubmit()
  {
    if(this.SearchFlightForm.valid)
    {
      alert(JSON.stringify(this.SearchFlightForm.value));
    }
  }

}
