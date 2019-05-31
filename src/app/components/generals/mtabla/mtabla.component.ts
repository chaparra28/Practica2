import { Component, OnInit } from '@angular/core';
import { GetjsonService } from '../../services/GetjsonService';

@Component({
  selector: 'app-mtabla',
  templateUrl: './mtabla.component.html',
  styleUrls: ['./mtabla.component.css']
})
export class MTablaComponent implements OnInit {

  constructor( private service: GetjsonService) { }
  public datos;

  ngOnInit() {
    this.service.getConfig().subscribe(resp =>{
      const response= resp;
      this.datos=response;
      console.log(response);
    },
    error =>{
      console.log(JSON.stringify(error));
    }
    );
  }

}
