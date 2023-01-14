import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { IndexComponent } from './componentes/index/index.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';


const routes: Routes = [
 {path:'', component: IndexComponent},
{path:'login', component:LoginComponent},
{path:'experiencia', component: ExperienciaComponent},
{path:'educacion', component: EducacionComponent},
{path:'skills', component: SkillsComponent},
{path:'proyectos', component: ProyectosComponent},
{path:'nuevaexp', component:NewExperienciaComponent},
{path:'nuevaedu', component:NewEducacionComponent},
{path:'editedu/:id', component: EditEducacionComponent},
{path:'editexp/:id', component: EditExperienciaComponent},
{path:'nuevoproy', component: NewProyectosComponent},
{path:'editproy/:id', component: EditProyectosComponent},
{path:'**', component: Pagina404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
