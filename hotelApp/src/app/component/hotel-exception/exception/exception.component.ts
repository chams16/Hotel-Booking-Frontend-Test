import {Component, Input} from '@angular/core';
import {Hotel} from "../../../models/hotel";

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrl: './exception.component.css'
})
export class ExceptionComponent {
  @Input() hotelList!:Hotel[]
}
