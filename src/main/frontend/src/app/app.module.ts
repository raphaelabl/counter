import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCountComponent } from './components/user-count/user-count.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { NewDrinkComponent } from './components/new-drink/new-drink.component';
import {FormsModule} from "@angular/forms";
import { NewLocationComponent } from './components/new-location/new-location.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserCountComponent,
    HomeComponent,
    NewDrinkComponent,
    NewLocationComponent,
    NewUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
