import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { Location } from '../models/location.model';
import { Weather } from '../models/weather.model';
const dummyWeatherData: Weather = {
  temperature: 25,
  description: "Partly cloudy"
};

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  selectedLocation: Location | undefined;
  selectedLocationWeather: any | undefined;

  constructor(
    private route: ActivatedRoute,
    // private locationService: LocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const locationId = params['id'];
      this.selectedLocation = history.state.data;
      // this.getLocationDetails(locationId);
      if(this.selectedLocation){
        this.getWeatherForLocation(this.selectedLocation);
      }
    });
  }

  // getLocationDetails(locationId: string) {
  //   this.locationService.getLocationById(locationId).subscribe(
  //     location => {
  //       this.selectedLocation = location;
  //       this.getWeatherForLocation(location);
  //     },
  //     error => {
  //       console.error('Error fetching location details:', error);
  //       // Handle error (e.g., display error message to user)
  //     }
  //   );
  // }

  getWeatherForLocation(location: any) {
    // this.selectedLocationWeather = dummyWeatherData;
    this.weatherService.getWeather(location.id).subscribe(
      weather => {
        // Assuming the weather data is returned in the expected format
        if (weather.data.length){
          this.selectedLocationWeather = weather.data[0];
        }
      },
      error => {
        console.error('Error fetching weather:', error);
        // Handle error (e.g., display error message to user)
      }
    );
  }
}
