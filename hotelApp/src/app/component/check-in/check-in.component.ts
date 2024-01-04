import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.css'
})
export class CheckInComponent {

  @Input() paymentHT!:number
  @Input() paymentTTC!:number

}
