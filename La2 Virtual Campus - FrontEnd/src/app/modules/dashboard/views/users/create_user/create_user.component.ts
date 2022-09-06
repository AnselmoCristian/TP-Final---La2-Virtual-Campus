import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../../sevices/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fte-create_user',
  templateUrl: './create_user.component.html',
  styleUrls: ['./create_user.component.scss']
})
export class CreateUserComponent implements OnInit {

  // Inputs

  formCreateUser = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    email: new FormControl('', { validators: [ Validators.required, Validators.email ] }),
    dni: new FormControl('', { validators: [ Validators.required ] }),
    password: new FormControl('', { validators: [ Validators.required ] }),
    role: new FormControl('', {validators: [Validators.required ] })
  });

  hide = true;

  // Input Select

  selectedValue!: string;

  role: Role[] = [
    {value: 'student', viewValue: 'Student'},
    {value: 'admin', viewValue: 'Admin'},
    {value: 'teacher', viewValue: 'Teacher'},
  ];
  
  
  constructor(private _dashboard: DashboardService, private _router: Router) { }

  ngOnInit(): void {
    console.log(this.formCreateUser.value);    
  }

  newUser() {
    const {name, email, dni, password, role} = this.formCreateUser.value;
    console.log(this.formCreateUser.value);
    
    
    this._dashboard.createNewUser(name, email, dni, password, role).subscribe(
      response => {
        this._router.navigate(['/dashboard/index_user'])
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