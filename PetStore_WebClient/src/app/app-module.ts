import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PetStoreOverview } from './pet-store-overview/pet-store-overview';
import { SexPipe } from '../pipes/sex-pipe';
import { AnimalTypePipe } from '../pipes/animal-type-pipe';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    PetStoreOverview,
    AnimalTypePipe,
    SexPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
