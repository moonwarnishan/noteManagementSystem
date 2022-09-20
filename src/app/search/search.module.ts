import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { SearchRoutingModule } from './search-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { SearchflightComponent } from './searchflight/searchflight.component';


@NgModule({
  declarations: [
    SearchflightComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    AutocompleteLibModule
  ]
})
export class SearchModule { }
