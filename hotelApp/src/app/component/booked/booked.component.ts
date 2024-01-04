import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Hotel} from "../../models/hotel";
import {HotelServiceService} from "../../service/HotelService/hotel.service";
import {Payment} from "../../models/payment";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PaymentServiceService} from "../../service/PaymentService/payment-service.service";

@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrl: './booked.component.css'
})
export class BookedComponent{
  hotel!:Hotel
  numberPerson:number=1
  priceToPay!:number
  priceToPayTTC!:number
  availableBooking!:boolean
  payment!:Payment

  constructor(private hotelservice:HotelServiceService, private route:Router,private paymentservice:PaymentServiceService) {
    this.hotel = <Hotel>JSON.parse(localStorage.getItem("hotel")!)
    if(localStorage.getItem("hotel")!=null){
      this.priceToPay=this.hotel.price
      this.availableBooking=true
      //this.payment.sum=this.priceToPay
      //this.payment.price=this.hotel.price
      //this.payment.nbrPerson=this.numberPerson;
    }
    this.payment = new Payment();
  }
  modifyQuantity(value:string){
    if(this.numberPerson<1 || value=="max"){
      this.numberPerson+=1;
      this.priceToPay=this.numberPerson*this.hotel.price
    }else if(this.numberPerson>1 && value =="min"){
      this.numberPerson-=1;
      this.priceToPay=this.numberPerson*this.hotel.price
      console.log(this.numberPerson)
    }
  }

  payHotel(){
    this.payment.sum=this.priceToPay
    this.payment.price=this.hotel.price
    this.payment.nbrPerson=this.numberPerson;
    console.log(this.payment)
    this.paymentservice.getPayment(this.payment).subscribe((response:any)=>{
        this.priceToPayTTC=response
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      })
  }

  cancel(){
    localStorage.removeItem("hotel")
    this.route.navigate((['']))
  }



}
