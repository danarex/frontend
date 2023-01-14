import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL='https://backend-b07e.onrender.com/experiencia/';

  constructor(private http:HttpClient) { }

    public traer(): Observable <Experiencia[]>{
      return this.http.get<Experiencia[]>(this.expURL + 'traer');
    }

    public detail(id:number): Observable<Experiencia> {
      return this.http.get<Experiencia>(this.expURL + `detail/${id}`);

      
   }
   public save(experiencia:Experiencia): Observable<any> {

    return this.http.post<any>(this.expURL + `crear`, experiencia);
   }
   
   public update(id:number,experiencia:Experiencia): Observable<any> {
    return this.http.put<any>(this.expURL + `editar/${id}`, experiencia);
   }

   public delete(id:number): Observable<any> {
      return this.http.delete<any>(this.expURL + `borrar/${id}`);
   }


   

}