import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  
  constructor( 
    private formBuilder : FormBuilder,
    private loginService : LoginServiceService,
    private route : Router
    ) { 
      if(localStorage.getItem('loggedInUser')==null)
    {
      this.loginForm=this.formBuilder.group(
        {
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]],
        });
    }
    else
    {
      this.route.navigate(['dashboard']);
    }
    }
    onSubmit()
    {
      if(this.loginForm.valid)
      {
        this.loginService.Login(this.loginForm.value);
      }
      else
      {
        Swal.fire({
          title: 'Please Provide Valid Information',
          icon: 'warning'
        });
      }
    }
  ngOnInit(): void {
  }

}
