import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserCountComponent} from "./components/user-count/user-count.component";
import {HomeComponent} from "./components/home/home.component";
import {NewLocationComponent} from "./components/new-location/new-location.component";
import {NewUserComponent} from "./components/new-user/new-user.component";

const routes: Routes = [
  {path: 'location', component: NewLocationComponent},
  {path: 'user', component: NewUserComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
