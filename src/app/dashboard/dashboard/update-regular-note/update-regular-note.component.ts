import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-regular-note',
  templateUrl: './update-regular-note.component.html',
  styleUrls: ['./update-regular-note.component.css']
})
export class UpdateRegularNoteComponent implements OnInit {

  UpdateregularNoteForm : FormGroup
  constructor(
    private formBuilder : FormBuilder,
    private dashBoardService : DashboardService
  ) 
  {
    var user=localStorage.getItem('loggedInUser');
    const Existdata = JSON.parse(localStorage.getItem('update') || '');
    this.UpdateregularNoteForm=this.formBuilder.group({
      text:[Existdata['text'],[Validators.required,Validators.maxLength(100)]]
    });
  }

  onSubmit()
  {
    if(this.UpdateregularNoteForm.valid)
    {
      var user = localStorage.getItem('loggedInUser');
      var obj = {user:user,notetype:"regularNote"}
      Object.assign(this.UpdateregularNoteForm.value,obj);
      this.dashBoardService.UpdateReg(this.UpdateregularNoteForm.value)
    }
    else
    {
      Swal.fire("Please give proper input")
    }
    
  }

  ngOnInit(): void {
  }

}
