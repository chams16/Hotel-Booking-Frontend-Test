import {Component, OnInit} from '@angular/core';
import {Hotel} from "./models/hotel";
import {HotelServiceService} from "./service/HotelService/hotel.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public hotels!: Hotel[];

  constructor(private hotelservice:HotelServiceService) {
  }

  ngOnInit() {
    this.getHotels();
  }

  public getHotels()
  {
    this.hotelservice.getHotels().subscribe(
      (response:Hotel[])=>{
        console.log(response)
        this.hotels=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    )
  }

}
