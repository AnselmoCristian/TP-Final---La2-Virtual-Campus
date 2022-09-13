import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../sevices/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fte-create_user',
  templateUrl: './create_user.component.html',
  styleUrls: ['./create_user.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class CreateUserComponent {

  formCreateUserItems: FormCreateUserItem[] = [
    {
      label:'User Name',
      name: 'name',
      placeHolder: 'User Name',
    },
    {
      label:'Email',
      name: 'email',
      placeHolder: 'Email',
    },
    {
      label:'Document Number',
      name: 'dni',
      placeHolder: 'Document',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Inputs form
  formCreateUser = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    email: new FormControl('', { validators: [ Validators.required, Validators.email ] }),
    dni: new FormControl('', { validators: [ Validators.required ] }),
    password: new FormControl('', { validators: [ Validators.required ] }),
    role: new FormControl('', {validators: [Validators.required ] })
  });

  //Dont Delete
  hide = true;

  // Input Select
  selectedValue!: string;

  role: Role[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'teacher', viewValue: 'Teacher'},
    {value: 'student', viewValue: 'Student'},
  ];

  //---------------------------------------------------------------------------------------------------
  // Constructor  
  constructor(private _dashboard: DashboardService, private _router: Router) { }

  //---------------------------------------------------------------------------------------------------

  // Create Button
  newUser() {
    const {name, email, dni, password, role} = this.formCreateUser.value;
    console.log(name, email, dni, password, role);
    
    this._dashboard.createNewUser(name, email, dni, password, role).subscribe(
      response => {
        this._router.navigate(['/dashboard'])
      }, error => {
        console.log(error);
      }
    );
  }
}

interface Role {
  value: string;
  viewValue: string;
}

interface FormCreateUserItem {
  label: string;
  name: string;
  placeHolder: string;
}