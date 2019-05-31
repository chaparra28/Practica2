import { Component, OnInit } from '@angular/core';
import { GetjsonService } from '../../services/GetjsonService';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor( private service: GetjsonService) { }

  public datos=
  {
    id:20,
    nombre:'juani',
    usuario:'garcia',
    telefono:'garcia',
    direccion:'san pedro'
  };

  public getdata=function()
  {
    this.service.getConfig().subscribe(resp =>{
      const response =resp;
      console.log(response);
    },
    error =>{
      console.log(JSON.stringify(error));
    }
    );
  }

  ngOnInit() {
    this.service.getConfig().subscribe(resp => {
      const response = resp;
      console.log(response);
    },
    error => {
      console.log(JSON.stringify(error));
    }
    );
  }

  public submit = function(){
    this.showPostFrom= false;
    return this.service.postConfig(this.datos).subscribe(res=>
      {
      const response = res;
      console.log(response);
      this.getdata();
    },
    error =>{
      console.log(JSON.stringify(error));
    }
    );
  };
  public delete = function(){
    this.showPostFrom= false;
    return this.service.dropConfig(1).subscribe(res=>{
      const response = res;
      console.log(response);
      this.getdata();
    },
    error =>{
      console.log(JSON.stringify(error));
    }
    );
  };  
  

}
