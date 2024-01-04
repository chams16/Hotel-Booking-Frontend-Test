import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HotelServiceService} from "./service/HotelService/hotel.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './component/nav-component/navbar/navbar.component';
import { ExceptionComponent } from './component/hotel-exception/exception/exception.component';
import { HotelCardComponent } from './component/hotel-card/hotel-card.component';
import { AddHotelModalComponent } from './component/add-hotel-modal/add-hotel-modal.component';
import { BookedComponent } from './component/booked/booked.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponentComponent } from './component/main-component/main-component.component';
import { CheckInComponent } from './component/check-in/check-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExceptionComponent,
    HotelCardComponent,
    AddHotelModalComponent,
    BookedComponent,
    MainComponentComponent,
    CheckInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [HotelServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
