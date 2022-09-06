import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';

@Component({
  selector: 'fte-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    document: new FormControl('', { validators: [ Validators.required] }),
    password: new FormControl('', { validators: [ Validators.required] }),
    entity: new FormControl('', { validators: [ Validators.required] }),
  });
  
  hide = true;

  constructor(private _auth: AuthService, private _router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const {document, password, entity} = this.formLogin.value;
    console.log(this.formLogin.value);
    this._auth.login(entity, document, password).subscribe(
      response => {
        const {user, token} = response;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        localStorage.setItem('isLogged', 'true')
        this._router.navigate(['/dashboard'])
      }, error => {
        console.log(error);
      }
    )
  }
}