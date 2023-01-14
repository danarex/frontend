import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';


@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proy: Proyectos=null;
  constructor(
    private proyectosService:ProyectosService, 
    private activatedRoute:ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.detail(id).subscribe({
      next:data =>{
        this.proy= data;
      }, error: err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
  });
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.update(id, this.proy).subscribe({
      next:data => {
        this.router.navigate(['']);
      }, error:err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
  });
  }

}