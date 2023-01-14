import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia:Experiencia[] = [];
  constructor(public experienciaService:ExperienciaService, private tokenService: TokenService) { }
  
  isLogged = false;

  
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaService.traer().subscribe(data => { this.experiencia = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe({
        next:data => {
          this.cargarExperiencia();
        }, 
        error:err => {
          alert("No se pudo borrar la experiencia");
        }
    });
    }
  }
}