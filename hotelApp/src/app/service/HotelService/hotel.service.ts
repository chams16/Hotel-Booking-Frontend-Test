import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../../../../../hotelApp/src/app/models/hotel";
import {environnement} from "../../../environnements/environnement";
import {Payment} from "../../models/payment";

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {
  private apiUrl = environnement.apiUrl;
  hotelItem!:Hotel

  constructor(private http: HttpClient) { }

  public getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(`${this.apiUrl}/api/hotel/all`);
  }

  public addHotel(hotel: Hotel):Observable<Hotel>{
    return this.http.post<Hotel>(`${this.apiUrl}/api/hotel/add`,hotel);
  }

}
