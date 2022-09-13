import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'fte-sure',
  templateUrl: './sure.component.html',
  styleUrls: ['./sure.component.scss']
})

//---------------------------------------------------------------------------------------------------

export class SureComponent {

  //---------------------------------------------------------------------------------------------------
  // Constructor
  constructor(private _dialogRef: DialogRef) { }

  // Do something
  yesOption() {
  throw new Error('Method not implemented.');
  }

  //---------------------------------------------------------------------------------------------------

  // Don't do something
  NoOption() {
    this._dialogRef.close();
  }

  //---------------------------------------------------------------------------------------------------
}
