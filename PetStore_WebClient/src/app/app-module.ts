import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PetStoreOverview } from './pet-store-overview/pet-store-overview';
import { SexPipe } from '../pipes/sex-pipe';
import { AnimalTypePipe } from '../pipes/animal-type-pipe';
import { provideHttpClient } from '@angular/common/http';
import { AgePipe } from '../pipes/age-pipe';
import { AddPet } from './add-pet/add-pet';
import { CommonModule } from '@angular/common';
import { Statistics } from './statistics/statistics';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [
    App,
    PetStoreOverview,
    AgePipe,
    AnimalTypePipe,
    SexPipe,
    AddPet,
    Statistics,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgApexchartsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
