import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fte-contact-us',
  templateUrl: './contact_us.component.html',
  styleUrls: ['./contact_us.component.scss']
})
export class ContactUsComponent {

  // Inputs
  formContact = new FormGroup({
    from: new FormControl('', { validators: [ Validators.required ] }),
    to: new FormControl('', { validators: [ Validators.required ] }),
    subject: new FormControl('', { validators: [ Validators.required ] }),
    password: new FormControl('', { validators: [ Validators.required ] }),
  });

  constructor() { }
}