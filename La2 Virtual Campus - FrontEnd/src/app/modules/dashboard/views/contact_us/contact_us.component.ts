import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fte-contact-us',
  templateUrl: './contact_us.component.html',
  styleUrls: ['./contact_us.component.scss']
})
export class ContactUsComponent {

  formItems: FormItem[] = [
    {
      label: "From",
      name: "from",
      placeHolder: "From",
    },
    {
      label: "Subject",
      name: "asunto",
      placeHolder: "Subject",
    }
  ];

  // Inputs
  formContact = new FormGroup({
    from: new FormControl('', { validators: [ Validators.required ] }),
    asunto: new FormControl('', { validators: [ Validators.required ] }),
    text: new FormControl('', { validators: [ Validators.required ] }),
  });

  constructor() { }
}

export interface FormItem {
  label: String;
  name: String;
  placeHolder: String;
}
