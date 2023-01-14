import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL='https://backend-b07e.onrender.com/login/';
  constructor(private http:HttpClient) { }

    public getLogin(): Observable <login>{
      return this.http.get<login>(this.URL + 'traer');
    
   }
}