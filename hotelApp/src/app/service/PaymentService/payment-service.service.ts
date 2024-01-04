import { Injectable } from '@angular/core';
import {Payment} from "../../models/payment";
import {Observable} from "rxjs";
import {environnement} from "../../../environnements/environnement";
import {Hotel} from "../../models/hotel";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  private apiUrl = environnement.apiUrl;

  constructor(private http: HttpClient) { }

  public getPayment(payment:Payment):Observable<number>{
    return this.http.post<number>(`${this.apiUrl}/api/pay`,payment);
  }
}
