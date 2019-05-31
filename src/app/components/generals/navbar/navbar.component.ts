import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GetjsonService } from '../../services/GetjsonService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

public vista: string='Formulario';
  constructor(private router:Router, private service:GetjsonService) { }
  public formulario=function()
  {
    this.router.navigate(['Formulario']);
    this.vista="Formulario";
  };
  public mtabla=function()
  {
    this.router.navigate(['Tabla']);
    this.vista="Tabla";
  };
  public eliminar=function()
  {
    this.router.navigate(['Eliminar']);
    this.vista="Eliminar";
  };

  ngOnInit() {
    this.service.getConfig().subscribe(resp=>{
      const response=resp;
      console.log(response);
    });
  }

}
