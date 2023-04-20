import {Component, OnInit} from '@angular/core';
import {UserCount} from "../../models/dto/user-count.model";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.css']
})
export class UserCountComponent implements OnInit{
  counts: UserCount[] | undefined;


  constructor(private http: HttpService) {

  }

  ngOnInit(): void {
    this.http.getUserCount().subscribe({
      next: data => {
       this.counts = data;
      },
      error: err => {
        console.log(err);
      }
    })
  }



}
