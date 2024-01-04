import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hotel} from "../../../models/hotel";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 @Input() hotelList!:Hotel[]

  availableBooking!:boolean
  constructor() {
    if(localStorage.getItem("hotel")!=null){
      this.availableBooking=true
    }
  }

}
