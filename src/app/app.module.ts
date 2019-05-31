import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { NavbarComponent } from './components/generals/navbar/navbar.component';
import { FormularioComponent } from './components/generals/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { MTablaComponent } from './components/generals/mtabla/mtabla.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { from } from 'rxjs';
import { GetjsonService } from './components/services/GetjsonService';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    HomeComponent,
    MTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  
  ],
  providers: [
    GetjsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
