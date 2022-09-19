import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';
import { RegisterService } from 'src/app/Services/register.service';
import { MustMatch } from 'src/app/_validators/must-match.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  submitted = false;
  constructor(
    private formBuilder : FormBuilder,
    private registerService : RegisterService,
    private route : Router
  )
  { 
    if(localStorage.getItem('loggedInUser')==null)
    {
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        dateOfBirth : [new Date(),Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required] 
      }, 
      {
      validator: MustMatch('password', 'confirmPassword')});
      }
    else
      {
        this.route.navigate(['dashboard']);
      }
}

  ngOnInit(): void {
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
      this.submitted = true;
      if(this.registerForm.invalid)
      {
        Swal.fire(
          {
            title: 'Please Provide Valid Information',
            icon: 'warning'
          }
        );
      }
      else
      {
        this.registerService.userSaveDb(this.registerForm.value);    
      }
           
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
