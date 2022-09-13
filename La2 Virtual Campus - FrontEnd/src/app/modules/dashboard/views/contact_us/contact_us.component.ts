import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DashboardService } from '../../sevices/dashboard.service';

import { SuccessComponent, FailedComponent } from '@fte/shared/components';

@Component({
  selector: 'fte-contact-us',
  templateUrl: './contact_us.component.html',
  styleUrls: ['./contact_us.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class ContactUsComponent {

  contactUsItems: ContactUsItem[] = [
    {
      label: 'From (Email): ',
      name: 'email',
      placeHolder: 'From (Email): ',
    },
    {
      label: 'Affair: ',
      name: 'affair',
      placeHolder: 'Affair: ',
    }
  ];

  //---------------------------------------------------------------------------------------------------

  // Inputs form
  formContact = new FormGroup({
    email: new FormControl('', { validators: [ Validators.required, Validators.email ] }),
    affair: new FormControl('', { validators: [ Validators.required ] }),
    message: new FormControl('', { validators: [ Validators.required ] }),
  });

  //---------------------------------------------------------------------------------------------------

  // Constructor
  constructor(private _dialog: Dialog, private _dashboard: DashboardService, private _router: Router) {}

  //---------------------------------------------------------------------------------------------------
  
  // Submit Mail + PopUp.
  onSubmit() {
    const { email, affair, message } = this.formContact.value;
    this._dashboard.postContactUS( email, affair, message ).subscribe(
      response => {
        this._dialog.open(SuccessComponent, {
        width: '500px',
        height: '300px',
    });
    setTimeout(() => {
      this._dialog.closeAll();
    }, 750);
      }, error => {
        this._dialog.open(FailedComponent, {
          width: '500px',
          height: '300px',
        });
        setTimeout(() => {
          this._dialog.closeAll();
        }, 750);
        console.log(error);
      }
    )};

  //---------------------------------------------------------------------------------------------------
}

interface ContactUsItem {
  label: String;
  name: String;
  placeHolder: String;
}