import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'fte-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    email: new FormControl('', { validators: [ Validators.required, Validators.email ] }),
    document: new FormControl('', { validators: [ Validators.required ] }),
    password: new FormControl('', { validators: [ Validators.required ] }),
    //entity: new FormControl('', { validators: [ Validators.required ] })
  });
  
  hide = true;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    console.log(this.formRegister.value);    
  }

  onSubmit() {
    const {name, email, document, password /*, entity*/} = this.formRegister.value;
    console.log(this.formRegister.value);
    this._auth.register(/*entity, */ name, email, document, password).subscribe(
      response => {
        this._router.navigate(['/login'])
      }, error => {
        console.log(error);
      }
    )
  }
}