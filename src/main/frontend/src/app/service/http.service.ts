import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserCount} from "../models/dto/user-count.model";
import {environment} from "../../environments/environment";
import {Location} from "../models/location.model";
import {User} from "../models/user.model";
import {Drink} from "../models/drink.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUserCount(): Observable<UserCount[]>{
    return this.http.get<UserCount[]>(environment.BACKEND_URL + "user/getUsersWithCount");
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(environment.BACKEND_URL + "user");
  }

  postUser(user: User){
    return this.http.post(environment.BACKEND_URL + "user", user);
  }

  getLocations(): Observable<Location[]>{
    return this.http.get<Location[]>(environment.BACKEND_URL + "location");
  }

  postLocation(location: Location){
    return this.http.post(environment.BACKEND_URL + "location", location)
  }

  postDrink(drink: Drink){
    return this.http.post(environment.BACKEND_URL + "drink", drink)
  }

}
