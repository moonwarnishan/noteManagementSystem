import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren : ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path : 'dashboard',
    loadChildren : ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path : 'search',
    loadChildren : ()=>import('./search/search.module').then(m=>m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
