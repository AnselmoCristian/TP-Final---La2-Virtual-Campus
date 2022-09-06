import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthService {

  user: any;

  API_URI = 'http://localhost:3000/api'

  constructor(private _http: HttpClient) {}

    //POSTs
    //------------------------------------------------------------------

    login(entity: any, dni: any, password: any):Observable<any> {
      return this._http.post( `${this.API_URI}/${entity}/login/`, {dni, password} )
    }
    
    // Registers
    //------------------------------------------------------------------

    register(name: any, email: any, document: any, password: any):Observable<any> {
      return this._http.post( `${this.API_URI}/student/`, {name, email, dni:document, password} )
    }
    /*
    register(entity: any, name: any, email: any, document: any, password: any):Observable<any> {
      return this._http.post( `${this.API_URI}/${entity}/`, {name, email, dni:document, password} )
    } */
    //------------------------------------------------------------------
}

export interface auth {
  id: number;
  name: String;
  dni: number;
  mail: String;
  role: String;
}
