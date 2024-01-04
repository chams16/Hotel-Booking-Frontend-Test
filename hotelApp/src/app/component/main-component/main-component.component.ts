import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../models/hotel";
import {HotelServiceService} from "../../service/HotelService/hotel.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent implements OnInit{
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

  public searchItem(key: string): void {
    console.log(key);
    const results: Hotel[] = [];
    for (const hotel of this.hotels) {
      if (hotel.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || hotel.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || hotel.adress.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(hotel);
      }
    }
    this.hotels = results;
    if (results.length === 0 || !key) {
      this.getHotels();
    }
  }
}
