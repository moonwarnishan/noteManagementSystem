import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../header/header.component';
import { NotificationService } from './Notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  check = false;
  constructor(
    private route : Router,
    private notificationService: NotificationService
  ) { }


  Login(loginValue : any)
  {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if(loginValue!=null)
    { 
      for(let x in users)
      {
        if(users[x]['email'] == loginValue['email'] && users[x]['password'] == loginValue['password']  )
        {
          Swal.fire("login Success");
          this.route.navigate(['dashboard']);

          this.check =true;
          localStorage.setItem("loggedInUser",loginValue['email'])
          break;
        }
      }
      if(this.check==false)
      {
        Swal.fire("Invalid Credentials");
      }
      
    }
  }


  isLoggedIn()
  {
    if(localStorage.getItem("loggedInUser")!=null)
    {
      return true;
    }
    return false;
  }
  
  logOut()
  {
    localStorage.removeItem("loggedInUser");
    this.route.navigate(['auth/login']);
  }


}
