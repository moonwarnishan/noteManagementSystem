import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoForm : FormGroup;
  Date  : any;
  constructor(
    private formBuilder : FormBuilder,
    private DashboardServices : DashboardService
  ) { 
    this.todoForm=this.formBuilder.group(
      {
        text : ['',[Validators.required,Validators.maxLength(100),Validators.minLength(4)]],
        todoDateTime : ['',[Validators.required]]
      })
  }

  onSubmit()
  {
    if(this.todoForm.valid)
    {
      var user = localStorage.getItem('loggedInUser');
        var obj = {user:user,notetype:"todoNote"}
        Object.assign(this.todoForm.value,obj);
        this.DashboardServices.SaveNotes(this.todoForm.value);
    }
    else
    {
      Swal.fire("Please Give Proper Data");
    }
  }

  ngOnInit(): void {
  }

}
