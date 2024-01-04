import {Component, Input} from '@angular/core';
import {Hotel} from "../../models/hotel";
import {HotelServiceService} from "../../service/HotelService/hotel.service";
import {Route, Routes} from "@angular/router";

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css'
})
export class HotelCardComponent {
  @Input() hotelItem!:Hotel;
  constructor() {
  }

  bookHotel(hotelItem:Hotel){
    localStorage.setItem("hotel",JSON.stringify(hotelItem))
    window.location.reload()
  }

}
