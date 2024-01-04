import {Component, EventEmitter, Output} from '@angular/core';
import {Form, NgForm} from "@angular/forms";
import {Hotel} from "../../models/hotel";
import {HttpErrorResponse} from "@angular/common/http";
import {HotelServiceService} from "../../service/HotelService/hotel.service";

@Component({
  selector: 'app-add-hotel-modal',
  templateUrl: './add-hotel-modal.component.html',
  styleUrl: './add-hotel-modal.component.css'
})
export class AddHotelModalComponent {
  @Output() newHotelEvent = new EventEmitter<NgForm>();

  constructor(private hotelservice:HotelServiceService) {
  }

  public onAddHotel(addForm: NgForm): void {
    this.hotelservice.addHotel(addForm.value).subscribe(
      (response: Hotel) => {
        console.log(response);
        addForm.reset();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
