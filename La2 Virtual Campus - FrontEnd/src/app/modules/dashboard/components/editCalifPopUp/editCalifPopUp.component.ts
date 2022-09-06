import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fte-editCalifPopUp',
  templateUrl: './editCalifPopUp.component.html',
  styleUrls: ['./editCalifPopUp.component.scss']
})
export class EditCalifPopUpComponent implements OnInit {

  // Inputs
  formEditUser = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    email: new FormControl('', { validators: [ Validators.required, Validators.email ] }),
    dni: new FormControl('', { validators: [ Validators.required ] }),
    password: new FormControl('', { validators: [ Validators.required ] }),
    entity: new FormControl('', { validators: [ Validators.required ] })
  });

  hide = true;

  // Input Select
  selectedValue!: string;

  roles: Role[] = [
    {value: 'student', viewValue: 'Student'},
    {value: 'admin', viewValue: 'Admin'},
    {value: 'teacher', viewValue: 'Teacher'},
  ];

  constructor(private dialog: MatDialog) { }
  
  ngOnInit(): void {

  }

  // Cancel Button
  cancelButton() {
    const dialogRef = this.dialog.closeAll();
  }

  // Submit Button
  onSubmit() {
    console.log(this.formEditUser.value);
    return
    
    if (this.formEditUser.valid) {
      console.log(this.formEditUser.value);
    } else {
      
    }
  }
}

interface Role {
  value: string;
  viewValue: string;
}