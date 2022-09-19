import { Injectable } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { user } from 'src/models/user';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private route : Router
  ) { 
  }

  userSaveDb(userInfo : any)
  {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(userInfo);
    localStorage.setItem("users", JSON.stringify(users));
    Swal.fire('Register');
    this.route.navigate(['auth/login']);
  }
}
