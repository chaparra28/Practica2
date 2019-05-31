import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/generals/formulario/formulario.component';
import { MTablaComponent } from './components/generals/mtabla/mtabla.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'Eliminar',component:HomeComponent},
  {path:'Formulario',component:FormularioComponent},
  {path:'Tabla',component:MTablaComponent,},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
