import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';

import {catchError, retry} from 'rxjs/operators';
import { Practica } from 'src/app/generals/interface/practica';
import {observable, throwError, from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetjsonService{

  configUrl = 'https://my-json-server.typicode.com/mavericc/demo/perfiles';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }
  dropConfig(i){
return this.http.delete(this.configUrl+"/"+i);

  }

  postConfig(Datos){
    const json= JSON.stringify(Datos);
    const headers= new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.post(this.configUrl, json, {headers}).pipe(
      catchError(this.handleError)
    );
}
 private handleError(error:HttpErrorResponse){
   if(error.error instanceof ErrorEvent){
     console.error('An error ocurred:', error.error.message);
   }
   else{
     console.error(`Backend returned code ${error.status}, `+ ` ${error.error}`);
   }
   return throwError('Something bad happaned; please try again later.');
 }
}
