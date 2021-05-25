import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {marsRoverKey} from './api-keys';
@Injectable({
  providedIn: 'root'
})
export class RoverApiService {

  constructor(private http: HttpClient) { }

  getphotoByDateAndCamera(date: string, camera: string) 
  {
    return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&camera=" + camera + "&api_key=" + marsRoverKey)
  }
}
