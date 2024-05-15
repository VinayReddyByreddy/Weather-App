import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost/weather-app/weather-app/backend/api';

  constructor(private http: HttpClient) { }

  addLocation(coordinatex: number, coordinatey: number, locationName: string): Observable<Location> {
    return this.http.post<Location>(`${this.apiUrl}/add_location.php`, { x_axis : coordinatex, y_axis : coordinatey, location : locationName });
  }

  getLocations(): Observable<Location[]> {
    
    return this.http.get<Location[]>(`${this.apiUrl}/get_locations.php`);
  }

  deleteLocation(locationId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/locations/${locationId}`);
  }

  getLocationById(locationId:string): Observable<Location> {
    return this.http.get<Location>(`${this.apiUrl}/locations/${locationId}`);
  }
}
