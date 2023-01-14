import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  perURL='https://backend-b07e.onrender.com/personas/';
  constructor(private httpClient:HttpClient) { }

    public traer(): Observable <Persona[]>{
      return this.httpClient.get<Persona[]>(this.perURL + 'traer');
    
   }
   public detail(id:number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.perURL + `detail/$id`);

    
 }
 public save(persona:Persona): Observable<any> {

  return this.httpClient.post<any>(this.perURL + `crear`, persona);
 }
 
 public update(id:number,persona:Persona): Observable<any> {
  return this.httpClient.put<any>(this.perURL + `editar/${id}`, persona);
 }

 public delete(id:number): Observable<any> {
    return this.httpClient.delete<any>(this.perURL + `borrar/${id}`);
 }


 

}
