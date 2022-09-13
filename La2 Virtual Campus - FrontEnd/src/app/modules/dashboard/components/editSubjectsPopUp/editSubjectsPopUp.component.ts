import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fte-editSubjectsPopUp',
  templateUrl: './editSubjectsPopUp.component.html',
  styleUrls: ['./editSubjectsPopUp.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class EditSubjectsPopUpComponent {

  formEditSubjectsItems: FormEditSubjectsItem[] = [
    {
      label:'Name',
      name: 'name',
      placeHolder: 'Subject Name',
    },
    {
      label:'Subject Quota',
      name: 'quota',
      placeHolder: 'Subject Quota',
    },
    {
      label:'Subject Registered',
      name: 'registered',
      placeHolder: 'Subject Registered',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Inputs form
  formEditSubjects = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    quota: new FormControl('', { validators: [ Validators.required ] }),
    registered: new FormControl('', { validators: [ Validators.required ] }),
  });

  //---------------------------------------------------------------------------------------------------
  // Constructor
  constructor( public _dialogRef: MatDialogRef<EditSubjectsPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {

    this.formEditSubjects.patchValue({
      name: this.data.name,
      quota: this.data.quota,
      registered: this.data.registered
    });
  }

  //---------------------------------------------------------------------------------------------------

  // Cancel Button
  cancelButton() {
    this._dialogRef.close();
  }
  
  // Submit Button
  editSubjectButton() {
    this._dialogRef.close(this.formEditSubjects.value);
  }
}

interface FormEditSubjectsItem {
  label: string;
  name: any;
  placeHolder: any;
}