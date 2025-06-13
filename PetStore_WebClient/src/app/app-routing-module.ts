import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetStoreOverview } from './pet-store-overview/pet-store-overview';
import { AddPet } from './add-pet/add-pet';

const routes: Routes = [
  { path: '', redirectTo: '/petstore', pathMatch: 'full' }, // Default route
  { path: 'petstore', component: PetStoreOverview },
  { path: 'petstore/new', component: AddPet},
  { path: '**', component: PetStoreOverview }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
