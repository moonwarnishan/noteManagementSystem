import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-regularnote',
  templateUrl: './regularnote.component.html',
  styleUrls: ['./regularnote.component.css']
})
export class RegularnoteComponent implements OnInit {

  regularNoteForm : FormGroup
  constructor(
    private formBuilder : FormBuilder,
    private dashBoardService : DashboardService
  ) 
  {
    this.regularNoteForm=this.formBuilder.group({
      text:['',[Validators.required,Validators.maxLength(100)]]
    });
  }


  onSubmit()
  {
    if(this.regularNoteForm.valid)
    {
      var user = localStorage.getItem('loggedInUser');
      var obj = {user:user,notetype:"regularNote"}
      Object.assign(this.regularNoteForm.value,obj);
      this.dashBoardService.SaveNotes(this.regularNoteForm.value);
    }
    else
    {
      Swal.fire("please give proper input");
    }
  }

  ngOnInit(): void {
  }

}
