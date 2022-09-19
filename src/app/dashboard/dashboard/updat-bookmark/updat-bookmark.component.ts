import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';

@Component({
  selector: 'app-updat-bookmark',
  templateUrl: './updat-bookmark.component.html',
  styleUrls: ['./updat-bookmark.component.css']
})
export class UpdatBookmarkComponent implements OnInit {

  bookmarkForm : FormGroup
  constructor(
    private dashboardService : DashboardService,
    private formBuilder : FormBuilder
  ) {
    const Existdata = JSON.parse(localStorage.getItem("update")||'');
    this.bookmarkForm = this.formBuilder.group({
      siteName:[Existdata['siteName'],Validators.required],
      url:[Existdata['url'],Validators.required]
    });
   }

   onSubmit()
   {
      if(this.bookmarkForm.valid)
      {
        var user = localStorage.getItem('loggedInUser');
        var obj = {user:user,notetype:"bookmarkNotes"};
        Object.assign(this.bookmarkForm.value,obj);
        this.dashboardService.UpdateBook(this.bookmarkForm.value)
      }
   }

  ngOnInit(): void {
  }

}
