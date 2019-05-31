import { Component, OnInit } from '@angular/core';
import { GetjsonService } from '../services/GetjsonService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: GetjsonService) { }

  ngOnInit() {
  }

}
