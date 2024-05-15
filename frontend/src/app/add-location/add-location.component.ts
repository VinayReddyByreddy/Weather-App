import { Component } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {
  coordinatex: number | undefined;
  coordinatey: number | undefined;
  locationName: string | undefined;

  constructor(private router: Router, private locationService: LocationService) { }

  onSubmit() {
    // Validate and submit form data
    if (this.coordinatex && this.coordinatey && this.locationName) {
      this.locationService.addLocation(this.coordinatex, this.coordinatey, this.locationName).subscribe(
        response => {
          console.log('Location added successfully!', response);
          // Clear form fields after successful submission
          this.coordinatex = undefined;
          this.coordinatey = undefined;
          this.locationName = '';
          if (response) {
            // Redirect to another page on success
            this.router.navigate(['/locations']);
          } else {
            // Handle error
            console.error(response);
          }
        },
        error => {
          console.error('Error adding location:', error);
          // Handle error (e.g., display error message to user)
        }
      );
    }
  }
}
