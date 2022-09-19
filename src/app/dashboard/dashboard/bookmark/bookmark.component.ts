import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  bookmarkForm : FormGroup
  constructor(
    private dashboardService : DashboardService,
    private formBuilder : FormBuilder
  ) {
    this.bookmarkForm = this.formBuilder.group({
      siteName:['',Validators.required],
      url:['',Validators.required]
    });
   }

   onSubmit()
   {
      if(this.bookmarkForm.valid)
      {
        var user = localStorage.getItem('loggedInUser');
        var obj = {user:user,notetype:"bookmarkNotes"};
        Object.assign(this.bookmarkForm.value,obj);
        this.dashboardService.SaveNotes(this.bookmarkForm.value);
      }
      else
      {
        Swal.fire("Please give proper input");
      }
   }

   


  ngOnInit(): void {
  }

}
