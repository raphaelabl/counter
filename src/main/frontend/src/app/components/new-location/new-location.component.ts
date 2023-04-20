import {Component, OnInit} from '@angular/core';
import {Location} from "../../models/location.model";
import {HttpService} from "../../service/http.service";
import {LocationService} from "../../service/location.service";

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.css']
})
export class NewLocationComponent implements OnInit{
  inputLocation: Location = {
    id: 0,
    name: "",
    address: ""
  }


  constructor(private http: HttpService, private location: LocationService) {
  }

  insert(){
    console.log(this.inputLocation)

    this.http.postLocation(this.inputLocation).subscribe()
  }

  async ngOnInit(): Promise<void> {
    const loc = await this.location.getCurrentLocation()
    this.inputLocation.longitude = loc.long
    this.inputLocation.latitude = loc.lat
  }

}
