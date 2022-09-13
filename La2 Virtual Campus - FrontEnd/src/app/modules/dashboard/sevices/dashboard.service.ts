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

  // PUT Edit Users V2
  editUsers(id: any, name: any, email: any, dni:any, role: any) {
    return this._http.put( `${this.API_URI}/admin/edit/${id}`, {name, email, dni, role} );
  }

  //------------------------------------------------------------------ post("/assing/:id_matter

  // Get Teacher's Subjects
  getUsersSubjects():Observable<any>  {
    return this._http.get( `${this.API_URI}/user_matter/assing` );
  }

  // Post Subject Assignement
  postSubjectAssignement(id: any):Observable<any> {
    return this._http.post( `${this.API_URI}/user_matter/assing/${id}`, { id } );
  }   

  //Delete Teacher Subject assign
  deleteSubjectAssign(id: any):Observable<any> {
    return this._http.delete( `${this.API_URI}/user_matter/assing/${id}`, id);
  } 


  //------------------------------------------------------------------



  // Contact US!!!

  // POST Contact US
  postContactUS(email: any, affair: any, message: any):Observable<any> {
    return this._http.post( `${this.API_URI}/form/`, { email, affair, message } );
  }  
  
  // GET Contact US
  getContactUs():Observable<any>  {
    return this._http.get( `${this.API_URI}/form/` );
  }

  // Delete 1 Message of the Contact Us
  deleteContactUs(id: any) {
    return this._http.delete( `${this.API_URI}/form/${id}` );
  }

  //------------------------------------------------------------------
  




  //------------------------------------------------------------------

  // Get Student List Inscripted on a Specific Subject
  getStudentsInscriptedOnaSubject(id: any):Observable<any> {
    return this._http.get( `${this.API_URI}/user_matter/inscript/${id} `);
  }

  //------------------------------------------------------------------

  // Get Student's Subjects
  getStudentSubjects():Observable<any> {
    return this._http.get( `${this.API_URI}/user_matter/subscribe `);
  }

  //------------------------------------------------------------------



  //------------------------------------------------------------------------------------------------------------------
  


  // Edit Users
  putEmail(id: any, email: any, role: any):Observable<any> {
    return this._http.put( `${this.API_URI}/${role}/set_email/`, { email } );
  }

  putDni( id: any, dni: any, role: any):Observable<any> {
    return this._http.put( `${this.API_URI}/${role}/set_dni/`, { dni } );
  }

  putName(id: any, name: any, role: any):Observable<any> {
    return this._http.put( `${this.API_URI}/${role}/set_name/`, { name } );
  }

  //------------------------------------------------------------------
  
  // Subscribe to a New Subject
  postSubscribeToSubject( id_matter: any ):Observable<any> {
    return this._http.post( `${this.API_URI}/user_matter/subscribe/${id_matter}`, { id_matter } );
  }
  
  // Unsubscribe to a Subject
  deleteUnsubscribeToSubject(id: any):Observable<any> {
    return this._http.delete( `${this.API_URI}/user_matter/subscribe/${id}`, id);
  } 

  //------------------------------------------------------------------
  // Edit Califications PUTs

  putNota1(id_user: any, id_matter: any, note_1: any):Observable<any> {
    return this._http.put( `${this.API_URI}/user_matter/set_note1/${id_user}/${id_matter}`, { id_user, id_matter, note:note_1 } );
  }

  putNota2(id_user: any, id_matter: any, note_2: any):Observable<any> {
    return this._http.put( `${this.API_URI}/user_matter/set_note2/${id_user}/${id_matter}`, { id_user, id_matter, note:note_2 } );
  }

  putNota3(id_user: any, id_matter: any, note_3: any):Observable<any> {
    return this._http.put( `${this.API_URI}/user_matter/set_note3/${id_user}/${id_matter}`, { id_user, id_matter, note:note_3 } );
  }

  //------------------------------------------------------------------
  
  // Search by id
  getFormIdentifyById(id: any):Observable<any> {
    return this._http.get( `${this.API_URI}/form/${id}`, id );
  }

  //------------------------------------------------------------------
  
  

  //------------------------------------------------------------------
}

export interface dashboard {
  id: Number;
  name: String;
  dni: Number;
  mail: String;
  role: String;
}