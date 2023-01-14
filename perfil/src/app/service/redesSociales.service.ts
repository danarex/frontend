import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { redesSociales } from '../model/redesSociales.model';

@Injectable({
  providedIn: 'root'
})
export class RedesSocialesService {
  URL='https://backend-b07e.onrender.com/redessociales/';
  constructor(private http:HttpClient) { }

    public getRedesSociales(): Observable <redesSociales[]>{
      return this.http.get<redesSociales[]>(this.URL + 'traer');
    
   }
}