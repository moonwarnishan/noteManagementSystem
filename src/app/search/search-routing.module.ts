import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchflightComponent } from './searchflight/searchflight.component';

const routes: Routes = [
  {
    path:'flight',
    component:SearchflightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
