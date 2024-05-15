import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationTableComponent } from './location-table/location-table.component';
import { LocationDetailsComponent } from './location-details/location-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/locations', pathMatch: 'full' },
  { path: 'locations', component: LocationTableComponent },
  { path: 'add-location', component: AddLocationComponent },
  { path: 'location-details/:id', component: LocationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
