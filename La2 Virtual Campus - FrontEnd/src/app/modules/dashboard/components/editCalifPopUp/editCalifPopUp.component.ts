import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'fte-editCalifPopUp',
  templateUrl: './editCalifPopUp.component.html',
  styleUrls: ['./editCalifPopUp.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class EditCalifPopUpComponent {

  formEditCalificationsItems: FormEditCalificationsItem[] = [
    {
      label:'Calification N°1',
      name: 'note_1',
      placeHolder: 'Calification N°1',
    },
    {
      label:'Calification N°2',
      name: 'note_2',
      placeHolder: 'Calification N°2',
    },
    {
      label:'Calification N°3',
      name: 'note_3',
      placeHolder: 'Calification N°3',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Inputs form
  formEditCalifications = new FormGroup({
    note_1: new FormControl(''),
    note_2: new FormControl(''),
    note_3: new FormControl(''),
  });

  //---------------------------------------------------------------------------------------------------

  // Constructor
  constructor( public _dialogRef: MatDialogRef<EditCalifPopUpComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {

    this.formEditCalifications.patchValue({
      note_1: this.data.note_1,
      note_2: this.data.note_2,
      note_3: this.data.note_3,
    });
  }

  //---------------------------------------------------------------------------------------------------

  // Cancel Button
  cancelButton() {
    this._dialogRef.close();
  }
  
  // Submit Button
  editCalificationsButton() {
    this._dialogRef.close(this.formEditCalifications.value);
  }
}

interface FormEditCalificationsItem {
  label: string;
  name: string;
  placeHolder: string;
}