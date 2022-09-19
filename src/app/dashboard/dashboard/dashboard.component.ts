import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/Services/dashboard.service';
import { NotificationService } from 'src/app/Services/Notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  regularNoteData : any;
  bookmarkData : any;
  reminderData : any;
  todoData : any

  remindDays : any;
  remindWeeks : any;
  remindMonth : any;
  todoDays : any;
  todoWeeks : any;
  todoMonth : any;
  constructor(
    private dashboardService : DashboardService,
    private notificationService : NotificationService,
  ) 
  { 
    this.notificationService.clear();
    this.dashboardService.clearData();
    this.dashboardService.DateExchange();
    this.regularNoteData=this.dashboardService.retriveRegularNote();
    this.bookmarkData = this.dashboardService.retrivebookmarks();
    this.reminderData = this.dashboardService.RetriveReminder()
    this.todoData = this.dashboardService.RetriveTodo();
    this.notificationService.Retrivedata();
    this.remindDays=this.notificationService.remindDays();
    this.remindWeeks=this.notificationService.remindWeek();
    this.remindMonth = this.notificationService.remindMonth();
    this.todoDays=this.notificationService.todoDays();
    this.todoWeeks=this.notificationService.todoWeek();
    this.todoMonth=this.notificationService.todoMonth();

  }

  //Delete Regular 
  deleteRegularNote(x : any)
  {
    this.dashboardService.DeleteRegularNoteValue(x);
  }
  //delete bookmark
  deleteBookmark(data : any)
   {
    this.dashboardService.DeletebookmarkValue(data);
   }
   //delete Reminder
   DeleteReminderValue(data : any)
   {
    this.dashboardService.DeleteReminderValue(data);
   }

   //delete todo
   DeletetodoValue(data : any)
   {
    this.dashboardService.DeleteTodoValue(data);
   }

   //update 
   UpdateRegular(x :any)
   {
      this.dashboardService.updateRegular(x);
   }

   updateBookmark(x : any)
   {
    this.dashboardService.updateBookmark(x);
   }
   updateReminder(x : any)
   {
    this.dashboardService.UpdateReminder(x);
   }
   Updatetodo( x :any)
   {
    this.dashboardService.UpdateTodo(x);
   }





  ngOnInit(): void {
    
  }

}
