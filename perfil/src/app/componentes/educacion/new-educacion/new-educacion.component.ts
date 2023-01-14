import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  tituloE: string = '';
  inicioE: string = '';
  finE: string = '';
  imgE: string = '';

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.tituloE,this.inicioE, this.finE,this.imgE);
    this.educacionS.save(educacion).subscribe({
      next:data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, 
      error:err =>{
        alert("falló");
        this.router.navigate(['']);
      }
  });
  }

}