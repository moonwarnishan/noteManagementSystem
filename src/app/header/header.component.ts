import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  text = "login";
  constructor(
    private route : Router
  ) {
    if(localStorage.getItem("loggedInUser")===null)
    {
      this.login();
    }
    else
    {
      this.text=localStorage.getItem("loggedInUser")||'';
    }
  }
  
  logout()
  {
    localStorage.removeItem('loggedInUser');
    this.route.navigate(['auth/login']);
    this.text="login";
  }

  login()
  {
    this.route.navigate(['auth/login']);
  }


  reload()
  {
    window.location.reload();
  }

  
  ngOnInit(): void {
  }


}
