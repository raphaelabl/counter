import {Component, OnInit} from '@angular/core';
import {Location} from "../../models/location.model";
import {User} from "../../models/user.model";
import {HttpService} from "../../service/http.service";
import {LocationService} from "../../service/location.service";

@Component({
  selector: 'app-new-drink',
  templateUrl: './new-drink.component.html',
  styleUrls: ['./new-drink.component.css']
})
export class NewDrinkComponent implements OnInit{

  locations: Location[] | undefined;
  users: User[] | undefined;


  selectedUser: string = "";
  selectedLocation: string = "";

  constructor(private http: HttpService, private location: LocationService) {
  }

  ngOnInit(): void {
    this.refreshData();
    this.getNearestLocation();
  }

  refreshData(){
    this.http.getUsers().subscribe({
      next: value => {
        this.users = value;
      },
      error: err => {
        console.log(err)
      }
    })

    this.http.getLocations().subscribe({
      next: value => {
        this.locations = value;
      },
      error: err => {
        console.log(err)
      }
    })

  }

  async getNearestLocation() {
    const loc = await this.location.getCurrentLocation();

    let min = Number.MAX_VALUE;

    this.locations?.forEach(value => {
      if(value.latitude != null && value.longitude != null){
        let tmp = Math.sqrt(Math.pow((loc.long-value.longitude),2)+Math.pow((loc.long-value.longitude),2))
        if(min > tmp){
          this.selectedLocation = value.id + " " + value.name;
          min = tmp;
        }
      }
    })

  }

  insert() {
    let insertUser: User = {
      firstName: "",
      lastName: "",
      shortName: "",
      id: 0
    };
    let insertLocation: Location = {
      name: "",
      address: "",
      id: 0
    };

    this.users?.forEach(value => {
      if(value.id == Number(this.selectedUser.split(" ")[0])){
        insertUser = value;
      }
    })

    this.locations?.forEach(value => {
      if(value.id == Number(this.selectedLocation.split(" ")[0])){
        insertLocation = value;
      }
    })

    console.log({
      id: 0,
      user: insertUser,
      date: new Date(),
      location: insertLocation
    })

    this.http.postDrink({
      id: 0,
      user: insertUser,
      date: new Date(),
      location: insertLocation
    }).subscribe();

    this.selectedUser = "";
    this.selectedLocation = "";

  }

}
