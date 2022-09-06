import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fte-editSubjectsPopUp',
  templateUrl: './editSubjectsPopUp.component.html',
  styleUrls: ['./editSubjectsPopUp.component.scss']
})
export class EditSubjectsPopUpComponent {

  // Inputs
  formEditSubjects = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    quota: new FormControl('', { validators: [ Validators.required ] }),
    registered: new FormControl('', { validators: [ Validators.required ] }),
  });

  hide = true;

  // Input Select
  selectedValue!: string;

  constructor( public _dialogRef: MatDialogRef<EditSubjectsPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.formEditSubjects.patchValue({
      name: this.data.name,
      quota: this.data.quota,
      registered: this.data.registered
    });
  }

  // Cancel Button
  cancelButton() {
    this._dialogRef.close();
  }

  // Submit Button
  editSubject() {
    this._dialogRef.close(this.formEditSubjects.value);
  }
}

interface Role {
  value: string;
  viewValue: string;
}