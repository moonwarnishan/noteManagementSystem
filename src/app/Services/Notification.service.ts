import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  tododays :any[]= [];
  todoweek :any[]= [];
  todomonth :any[]= [];
  todos : any[]=[];
  reminddays :any[]= [];
  remindweek :any[]= [];
  remindmonth :any[]= [];
  reminds : any[]=[];
  constructor(
  ) { 
    
  }


  clear()
  {
    this.tododays = [];
    this.todoweek = [];
    this.todomonth = [];
    this.todos =[];
    this.reminddays = [];
    this.remindweek = [];
    this.remindmonth = [];
    this.reminds =[];
  }



  Retrivedata()
  {
    const user=localStorage.getItem('loggedInUser');
    const notes = JSON.parse(localStorage.getItem('Notes') || "[]");
    var today =new Date();
      today.setDate(today.getDate() + 1)
      var week=new Date();
      week.setDate(week.getDate() + 7)
      var month =new Date();
      month.setDate(month.getDate() + 30)
    for(let i of notes)
    {
      if(i.user===user)
        {
          if(i.notetype==='todoNote')
          {
            this.todos.push(i)
          }
          if(i.notetype==='reminderNote')
          {
            this.reminds.push(i);
          }
        }
    }

    for(let x  of this.todos)
    {
      var currentdate =new Date();
      var tododate=new Date(x['todoDateTime']);
      
      if(tododate<today && tododate > currentdate )
      {
        this.tododays.push(x);
      }
      if(tododate < week  && tododate > currentdate)
      {
        this.todoweek.push(x);
      }
      if(tododate <month && tododate > currentdate)
      {
        this.todomonth.push(x);
      }
    }

    for(let x  of this.reminds)
    {
      var currentdate =new Date();
      var remind=new Date(x['reminderDateTime']);
      if(remind<today && remind > currentdate )
      {
        this.reminddays.push(x);
      }
      if(remind < week  && remind > currentdate)
      {
        this.remindweek.push(x);
      }
      if(remind <month && remind > currentdate)
      {
        this.remindmonth.push(x);
      }
    }
  }

  //return todos
  todoDays()
  {
   return this.tododays;  
  }
  todoWeek()
  {
    return this.todoweek;
    
  }
  todoMonth()
  {
    return this.todomonth;
  }

  //return reminders
  remindDays()
  {
    return this.reminddays;
  }
  remindWeek()
  {
    return this.remindweek;
  }
  remindMonth()
  {
    return this.remindmonth;
  }



}
