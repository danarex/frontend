import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proURL='https://backend-b07e.onrender.com/proyectos/';

  constructor(private httpClient:HttpClient) { }

    public traer(): Observable <Proyectos[]>{
      return this.httpClient.get<Proyectos[]>(this.proURL + 'traer');
    }

    public detail(id:number): Observable<Proyectos> {
      return this.httpClient.get<Proyectos>(this.proURL + `detail/${id}`);

      
   }

   public save(proyectos:Proyectos): Observable<any> {

    return this.httpClient.post<any>(this.proURL + `crear`, proyectos);
   }
   
   public update(id:number,proyectos:Proyectos): Observable<any> {
    return this.httpClient.put<any>(this.proURL + `editar/${id}`, proyectos);
   }

   public delete(id:number): Observable<any> {
      return this.httpClient.delete<any>(this.proURL + `borrar/${id}`);
   }

   

}