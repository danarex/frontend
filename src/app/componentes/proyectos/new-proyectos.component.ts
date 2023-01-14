import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  fechaE: string = '';
  linkE: string = '';
  imgE: string = '';

  constructor(private proyectosService: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyectos(this.nombreE, this.descripcionE, this.fechaE, this.linkE, this.imgE);
    this.proyectosService.save(expe).subscribe({
      next:data => {
        alert("Proyectos añadida");
        this.router.navigate(['']);
      }, 
      error:err => {
        alert("Falló");
        this.router.navigate(['']);
      }
  });
  }

}