import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location.model';
const LOCATIONS: Location[] = [
  { id: '1', x_axis: 10, y_axis: 20, location_name: 'Location A' },
  { id: '2', x_axis: 15, y_axis: 25, location_name: 'Location B' },
  { id: '3', x_axis: 30, y_axis: 40, location_name: 'Location C' },
  // Add more dummy data as needed
];

@Component({
  selector: 'app-location-table',
  templateUrl: './location-table.component.html',
  styleUrls: ['./location-table.component.css']
})
export class LocationTableComponent implements OnInit {
  locations: Location[] | undefined;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    // this.locations = LOCATIONS;
    this.locationService.getLocations().subscribe(
      locations => {
        console.log(locations);
        this.locations = locations
      },
      error => {
        console.error('Error fetching locations:', error);
        // Handle error (e.g., display error message to user)
      }
    );
  }

  viewDetails(location: Location) {
    // Implement navigation to view location details
    console.log('Viewing details for location:', location);
  }

  deleteLocation(location: Location) {
    // Implement logic to delete the location
    console.log('Deleting location:', location);
  }
}
