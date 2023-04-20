import { Injectable } from '@angular/core';
import {Cordinate} from "../models/dto/cordinate";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() {}

  getCurrentLocation() {
    return new Promise<Cordinate>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              console.log(
                'Latitude: ' +
                position.coords.latitude +
                'Longitude: ' +
                position.coords.longitude
              );
              let lat = position.coords.latitude;
              let lng = position.coords.longitude;

              const location: Cordinate = {
                lat: lat,
                long: lng,
              };
              resolve(location);
            }
          },
          (error) => console.log(error)
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }
}
