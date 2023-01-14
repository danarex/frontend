import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { PortfolioService } from '../../service/portfolio.service';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  persona:Persona[] = [];
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
   

    this.personaService.traer().subscribe(data=>{
      this.persona=data}
      )
  }

}
