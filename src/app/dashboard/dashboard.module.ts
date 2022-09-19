import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegularnoteComponent } from './dashboard/regularnote/regularnote.component';
import { ReminderComponent } from './dashboard/reminder/reminder.component';
import { TodoComponent } from './dashboard/todo/todo.component';
import { BookmarkComponent } from './dashboard/bookmark/bookmark.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateRegularNoteComponent } from './dashboard/update-regular-note/update-regular-note.component';
import { UpdatBookmarkComponent } from './dashboard/updat-bookmark/updat-bookmark.component';
import { UpdatereminderComponent } from './dashboard/updatereminder/updatereminder.component';
import { UpdatetodoComponent } from './dashboard/updatetodo/updatetodo.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RegularnoteComponent,
    ReminderComponent,
    TodoComponent,
    BookmarkComponent,
    UpdateRegularNoteComponent,
    UpdatBookmarkComponent,
    UpdatereminderComponent,
    UpdatetodoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
