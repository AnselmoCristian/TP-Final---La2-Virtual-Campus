import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fte-editPopUp',
  templateUrl: './editPopUp.component.html',
  styleUrls: ['./editPopUp.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class EditPopUpComponent {

  formEditUsersItems: FormEditUsersItem[] = [    
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
  formEditUser = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    email: new FormControl('', { validators: [ Validators.required, Validators.email ] }),
    dni: new FormControl('', { validators: [ Validators.required ] }),
    role: new FormControl('', { validators: [ Validators.required ] })
  });

  // Input Select
  selectedValue!: string;

  role: Role[] = [
    {value: 'student', viewValue: 'Student'},
    {value: 'admin', viewValue: 'Admin'},
    {value: 'teacher', viewValue: 'Teacher'},
  ];

  //---------------------------------------------------------------------------------------------------
  // Constructor
  constructor( public _dialogRef: MatDialogRef<EditPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.formEditUser.patchValue({
      name: this.data.name,
      email: this.data.email,
      dni: this.data.dni,
      role: this.data.role
    });
  }

  //---------------------------------------------------------------------------------------------------

  // Cancel Button
  cancelButton() {
    const dialogRef = this._dialogRef.close();
  }

  // Submit Button
  editUserButton() {
    this._dialogRef.close(this.formEditUser.value);
  }
}

interface Role {
  value: string;
  viewValue: string;
}

interface FormEditUsersItem {
  label: string;
  name: string;
  placeHolder: string;
}