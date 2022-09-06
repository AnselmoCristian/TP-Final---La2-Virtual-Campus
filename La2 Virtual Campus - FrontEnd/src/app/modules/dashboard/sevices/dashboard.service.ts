import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {

  API_URI = 'http://localhost:3000/api'

  constructor(private _http: HttpClient) {}

  entitidad!: any;

  setEntity(entity: any) {
    this.entitidad = entity;
  }
  
  //POSTs
  
  // Create new User
  //------------------------------------------------------------------
  
  createNewUser(name: any, email: any, document: any, password: any, role: any):Observable<any> {
    return this._http.post( `${this.API_URI}/${role}/`, {name, email, dni:document, password, role} )
  }

  // Create new Suubject
  //------------------------------------------------------------------
  
  createNewSubject(authorization: any, name: any, quota: any, registered: any):Observable<any> {
    return this._http.post( `${this.API_URI}/matter/`, {authorization, name, quota, registered} )
  }

  //------------------------------------------------------------------

  // Subjects

  getSubjects():Observable<any> {
    return this._http.get( `${this.API_URI}/matter/` );
  }

  deleteSubject(id: any) {
    return this._http.delete( `${this.API_URI}/matter/${id}` );
  }

  editSubjects(id: any, name: any, quota:any, registered: any) {
    return this._http.put( `${this.API_URI}/matter/${id}`, {name, quota, registered} );
  }


  //------------------------------------------------------------------
  // GETs
  
  getAdmins():Observable<any>  {
    return this._http.get( `${this.API_URI}/admin/` )
  }

  getTeachers():Observable<any>  {
    return this._http.get( `${this.API_URI}/teacher/` )
  }

  getStudents():Observable<any>  {
    return this._http.get( `${this.API_URI}/student/` )
  }

  // Delete Users

  deleteUsers(id: any) {
    return this._http.delete( `${this.API_URI}/admin/${id}` );
  }


  

  deleteTeacher(id: any) {
    return this._http.delete( `${this.API_URI}/teacher/${id}` );
  }

  deleteStudent(id: any) {
    return this._http.delete( `${this.API_URI}/student/${id}` );
  }
  //------------------------------------------------------------------

  // PUTs

   // Edit Users V2
   editUsers(id: any, name: any, email: any, dni:any, role: any) {
    return this._http.put( `${this.API_URI}/admin/edit/${id}`, {name, email, dni, role} );
  }
  //------------------------------------------------------------------

  //------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------




















  // Edit users /*
  putEmail(id: any, email: any, role: any):Observable<any> {
    return this._http.put( `${this.API_URI}/${role}/set_email/`, { email } );
  }

  putDni( id: any, dni: any, role: any):Observable<any> {
    return this._http.put( `${this.API_URI}/${role}/set_dni/`, { dni } );
  }

  putName(id: any, name: any, role: any):Observable<any> {
    return this._http.put( `${this.API_URI}/${role}/set_name/`, { name } );
  }

  /*  
  putPassword(id: any, password: any) {
    return this._http.put( `${this.API_URI}/set_password`, password);
  } */
    
    //------------------------------------------------------------------

    getUserSubjects(id:any):Observable<any>  {
      return this._http.get( `${this.API_URI}/user_matter/inscript/` );
    }

    //------------------------------------------------------------------
    //POSTs

    postUserSubjects(id: any):Observable<any> {
      return this._http.post( `${this.API_URI}/user_matter/`, id );
    }
}

export interface dashboard {
  id: Number;
  name: String;
  dni: Number;
  mail: String;
  role: String;
}