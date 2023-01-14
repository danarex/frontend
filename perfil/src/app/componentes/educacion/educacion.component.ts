import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion:Educacion[] = [];
  constructor(private educacionService:EducacionService, private tokenService: TokenService) { }


  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.traer().subscribe((data) => {
      this.educacion = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe({
        next:data => {
          this.cargarEducacion();
        },
        error: err => {
          alert('No se pudo borrar la educación');
        }
    });
    }
  }
}
