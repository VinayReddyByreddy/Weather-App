import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationTableComponent } from './location-table/location-table.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { AddLocationComponent } from './add-location/add-location.component';

@NgModule({
  declarations: [
    LocationTableComponent,
    LocationDetailsComponent,
    AddLocationComponent
    // Other components
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule, // Add HttpClientModule here
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LocationTableComponent]
})
export class AppModule { }
