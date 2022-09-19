import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from 'src/app/Services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrls: ['./updatetodo.component.css']
})
export class UpdatetodoComponent implements OnInit {

  todoForm : FormGroup
  constructor(
    private formBuilder : FormBuilder,
    private DashboardServices : DashboardService
  ) { 

    var user=localStorage.getItem('loggedInUser');
    const Existdata = JSON.parse(localStorage.getItem('update')|| '');

    this.todoForm=this.formBuilder.group(
      {
        text : [Existdata['text'],[Validators.required,Validators.maxLength(100),Validators.minLength(4)]],
        todoDateTime : [Existdata['todoDateTime'],[Validators.required]]
      })
  }

  onSubmit()
  {
    if(this.todoForm.valid)
    {
      var user = localStorage.getItem('loggedInUser');
      var obj = {user:user,notetype:"todoNote"}
      Object.assign(this.todoForm.value,obj);
      this.DashboardServices.UpdateTodoo(this.todoForm.value);
    }
    else
    {
      Swal.fire("Please Give Proper Data");
    }
  }

  ngOnInit(): void {
  }

}
