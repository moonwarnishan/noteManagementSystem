import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  reminderForm : FormGroup
  constructor(private formBuilder : FormBuilder,
    private DashboardService : DashboardService
    ) {
    this.reminderForm=this.formBuilder.group({
      text : ['',Validators.required],
      reminderDateTime : ['',[Validators.required]]
    })
   }

   onSubmit()
   {
    if(this.reminderForm.valid)
    {
      var user = localStorage.getItem('loggedInUser');
        var obj = {user:user,notetype:"reminderNote"}
        Object.assign(this.reminderForm.value,obj);
        this.DashboardService.SaveNotes(this.reminderForm.value);
    }
    else
    {
      Swal.fire("Please Give Proper Input");
    }
      
   }

  ngOnInit(): void {
  }

}
