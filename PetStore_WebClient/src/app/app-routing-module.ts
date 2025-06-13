import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetStoreOverview } from './pet-store-overview/pet-store-overview';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'petstore', component: PetStoreOverview },
  { path: '**', component: PetStoreOverview }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
