import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../_guards/authguard.guard';
import { BookmarkComponent } from './dashboard/bookmark/bookmark.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegularnoteComponent } from './dashboard/regularnote/regularnote.component';
import { ReminderComponent } from './dashboard/reminder/reminder.component';
import { TodoComponent } from './dashboard/todo/todo.component';
import { UpdatBookmarkComponent } from './dashboard/updat-bookmark/updat-bookmark.component';
import { UpdateRegularNoteComponent } from './dashboard/update-regular-note/update-regular-note.component';
import { UpdatereminderComponent } from './dashboard/updatereminder/updatereminder.component';
import { UpdatetodoComponent } from './dashboard/updatetodo/updatetodo.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'regularnote',
    component:RegularnoteComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path:'todo',
    component:TodoComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path : 'reminder',
    component:ReminderComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path : 'bookmark',
    component:BookmarkComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path : 'updateregular',
    component : UpdateRegularNoteComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path : 'updatebook',
    component: UpdatBookmarkComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path : 'updateremind',
    component: UpdatereminderComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path : 'updatetodo',
    component: UpdatetodoComponent,
    canActivate:[AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
