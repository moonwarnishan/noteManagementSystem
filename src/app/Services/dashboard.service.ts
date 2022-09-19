import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegularnoteComponent } from '../dashboard/dashboard/regularnote/regularnote.component';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  regularNotes : any[]=[];
  remindNotes : any[]=[];
  todoNotes : any[]=[];
  bookmarkNote : any[]=[];

  constructor(
    private loginService : LoginServiceService,
    private route : Router
  ) { 
    
  }

//Save Notes
SaveNotes(obj : any)
{
  const notes=JSON.parse(localStorage.getItem('Notes')||"[]");
  notes.push(obj);
  localStorage.setItem('Notes',JSON.stringify(notes));
  this.route.navigate(['dashboard']);
}

clearData()
{
  this.regularNotes =[];
  this.remindNotes =[];
  this.todoNotes =[];
  this.bookmarkNote =[];
}

//Data Specification
DateExchange()
{
  const notes = JSON.parse(localStorage.getItem('Notes')||"[]");
  var user=localStorage.getItem('loggedInUser');
  for(let x of notes)
  {
    if(x['user']===user)
    {
      if(x['notetype']==='regularNote')
      {
        this.regularNotes.push(x);
      }
      if(x['notetype']==='reminderNote')
      {
        this.remindNotes.push(x);
      }
      if(x['notetype']==='todoNote')
      {
        this.todoNotes.push(x);
      }
      if(x['notetype']==='bookmarkNotes')
      {
        this.bookmarkNote.push(x);
      }
    }
  }
}














//Regular Note Services
  
  retriveRegularNote()
  {
   return this.regularNotes;
  }

  DeleteRegularNoteValue(data : any)
  {
    var user=localStorage.getItem('loggedInUser');
    var values = JSON.parse(localStorage.getItem('Notes') || "[]");
    const filterData = values.filter((item : any)=>JSON.stringify(item)!==JSON.stringify(data))
    localStorage.setItem('Notes',JSON.stringify(filterData));
    Swal.fire("deleted");
    window.location.reload();
  }




//bookmark services

  retrivebookmarks()
  {
    return this.bookmarkNote;
  }

  datas : any[]=[];
  DeletebookmarkValue(data : any)
  {
    var user=localStorage.getItem('loggedInUser');
    var values = JSON.parse(localStorage.getItem('Notes') || "[]");
    const filterData = values.filter((item : any)=>JSON.stringify(item)!==JSON.stringify(data))
    localStorage.setItem('Notes',JSON.stringify(filterData));
    Swal.fire("deleted");
    window.location.reload();
  }


  //reminder Services 
  
  RetriveReminder()
  {
    return this.remindNotes
  }

  DeleteReminderValue(data : any)
  {
    var user=localStorage.getItem('loggedInUser');
    var values = JSON.parse(localStorage.getItem('Notes') || "[]");
    const filterData = values.filter((item : any)=>JSON.stringify(item)!==JSON.stringify(data))
    localStorage.setItem('Notes',JSON.stringify(filterData));
    Swal.fire("deleted");
    window.location.reload();
  }

  
  //todoServices
 
  RetriveTodo()
  {
    return this.todoNotes;
  }

  DeleteTodoValue(data : any)
  {
    var user=localStorage.getItem('loggedInUser');
    var values = JSON.parse(localStorage.getItem('Notes') || "[]");
    const filterData = values.filter((item : any)=>JSON.stringify(item)!==JSON.stringify(data))
    localStorage.setItem('Notes',JSON.stringify(filterData));
    Swal.fire("deleted");
    window.location.reload();
  }

  //Update Regular Form
  updateRegular(x : any)
  {
    var user=localStorage.getItem('loggedInUser');
    localStorage.setItem('update',JSON.stringify(x));
    this.route.navigate(['dashboard/updateregular'])
  }

  UpdateReg(x : any)
  {
    var user=localStorage.getItem('loggedInUser');
    var values = JSON.parse(localStorage.getItem('Notes') || "[]") ;
    var obj = JSON.parse(localStorage.getItem('update') || '');
    values[values.findIndex((el : any) => JSON.stringify(el)  === JSON.stringify(obj))] = x;
    localStorage.setItem('Notes',JSON.stringify(values));
    localStorage.removeItem('update')
    Swal.fire("Success");
    this.route.navigate(['dashboard']);
  }

  //update Bookmark
  updateBookmark(x : any)
  {
    var user=localStorage.getItem('loggedInUser');
    localStorage.setItem('update',JSON.stringify(x));
    this.route.navigate(['dashboard/updatebook'])
  }

  UpdateBook(x : any)
  {
    var user=localStorage.getItem('loggedInUser');
    var values = JSON.parse(localStorage.getItem('Notes') || "[]") ;
    var obj = JSON.parse(localStorage.getItem('update') || '');
    values[values.findIndex((el : any) => JSON.stringify(el)  === JSON.stringify(obj))] = x;
    localStorage.setItem('Notes',JSON.stringify(values));
    localStorage.removeItem('update')
    Swal.fire("Success");
    this.route.navigate(['dashboard']);
  }

  //UpdateReminder
  UpdateReminder(x : any)
  {
    var user=localStorage.getItem('loggedInUser');
    localStorage.setItem('update',JSON.stringify(x));
    this.route.navigate(['dashboard/updateremind'])
  }

  UpdateRemind(x : any)
  {
    var user=localStorage.getItem('loggedInUser');
    var values = JSON.parse(localStorage.getItem('Notes') || "[]") ;
    var obj = JSON.parse(localStorage.getItem('update') || '');
    values[values.findIndex((el : any) => JSON.stringify(el)  === JSON.stringify(obj))] = x;
    localStorage.setItem('Notes',JSON.stringify(values));
    localStorage.removeItem('update')
    Swal.fire("Success");
    this.route.navigate(['dashboard']);
  }

  //update TOD0
  UpdateTodo(x : any)
  {
    var user=localStorage.getItem('loggedInUser');
    localStorage.setItem('update',JSON.stringify(x));
    this.route.navigate(['dashboard/updatetodo'])
  }

  UpdateTodoo(x : any)
  {
    var user=localStorage.getItem('loggedInUser');
    var values = JSON.parse(localStorage.getItem('Notes') || "[]") ;
    var obj = JSON.parse(localStorage.getItem('update') || '');
    values[values.findIndex((el : any) => JSON.stringify(el)  === JSON.stringify(obj))] = x;
    localStorage.setItem('Notes',JSON.stringify(values));
    localStorage.removeItem('update')
    Swal.fire("Success");
    this.route.navigate(['dashboard']);
  }



}
