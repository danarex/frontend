import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skURL='https://backend-b07e.onrender.com/skills/';

  constructor(private httpClient:HttpClient) { }

    public traer(): Observable <Skills[]>{
      return this.httpClient.get<Skills[]>(this.skURL + 'traer');
    }

    public detail(id:number): Observable<Skills[]> {
      return this.httpClient.get<Skills[]>(this.skURL + `detail/${id}`);

      
   }
   public save(skills:Skills): Observable<any> {

    return this.httpClient.post<any>(this.skURL + `crear`, skills);
   }
   
   public update(id:number,skills:Skills): Observable<any> {
    return this.httpClient.put<any>(this.skURL + `editar/${id}`, skills);
   }

   public delete(id:number): Observable<any> {
      return this.httpClient.delete<any>(this.skURL + `borrar/${id}`);
   }
}