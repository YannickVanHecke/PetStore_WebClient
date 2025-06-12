import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PetStoreOverview } from './pet-store-overview/pet-store-overview';
import { SexPipe } from '../pipes/sex-pipe';

@NgModule({
  declarations: [
    App,
    PetStoreOverview,
    SexPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
