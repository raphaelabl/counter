import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  inputUser: User = {
    id: 0,
    shortName: "",
    firstName: "",
    lastName: ""
  };


  constructor(private http: HttpService) {
  }

  insert(){
    console.log(this.inputUser);
    this.http.postUser(this.inputUser).subscribe();
  }
}
