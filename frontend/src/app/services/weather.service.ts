import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost/weather-app/weather-app/backend/api';

  constructor(private http: HttpClient) { }

  getWeather(locationId:number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/get_weather.php`, {location_id: locationId});
  }
}
