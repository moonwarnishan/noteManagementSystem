import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatereminder',
  templateUrl: './updatereminder.component.html',
  styleUrls: ['./updatereminder.component.css']
})
export class UpdatereminderComponent implements OnInit {
  reminderForm : FormGroup
  constructor(private formBuilder : FormBuilder,
    private DashboardService : DashboardService
    ) {
      var user=localStorage.getItem('loggedInUser');
    const Existdata = JSON.parse(localStorage.getItem('update') || '');
    this.reminderForm=this.formBuilder.group({
      text : [Existdata['text'],Validators.required],
      reminderDateTime : [Existdata['reminderDateTime'],[Validators.required]]
    })
   }

   onSubmit()
   {
    if(this.reminderForm.valid)
    {
      var user = localStorage.getItem('loggedInUser');
        var obj = {user:user,notetype:"reminderNote"}
        Object.assign(this.reminderForm.value,obj);
      this.DashboardService.UpdateRemind(this.reminderForm.value);
    }
    else
    {
      Swal.fire("Please Give Proper Input");
    }
      
   }
  ngOnInit(): void {
  }

}
