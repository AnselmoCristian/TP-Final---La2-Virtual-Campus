import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../../sevices/dashboard.service';

@Component({
  selector: 'fte-create_subjects',
  templateUrl: './create_subjects.component.html',
  styleUrls: ['./create_subjects.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class CreateSubjectsComponent {

  formCreateSubjectItems: FormCreateSubjectItem[] = [    
    {
      label:'Subject Name',
      name: 'name',
      placeHolder: 'Subject Name',
    },
    {
      label:'Subject Quota',
      name: 'quota',
      placeHolder: 'Subject Quota',
    },
    {
      label:'Subject registered',
      name: 'registered',
      placeHolder: 'Subject registered',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Inputs form
  formCreateSubject = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    quota: new FormControl('', { validators: [ Validators.required ] }),
    registered: new FormControl('', { validators: [ Validators.required ] }),
  });

  // Authorization Var
  authorization!: any;

  //---------------------------------------------------------------------------------------------------
  // Constructor
  constructor(private _dashboard: DashboardService, private _router: Router) {
  }

  //---------------------------------------------------------------------------------------------------

  // Cancel Button
  newSubject() {
    const {name, quota, registered} = this.formCreateSubject.value;    
    this._dashboard.createNewSubject(this.authorization, name, quota, registered).subscribe(
      response => {
        this._router.navigate(['/dashboard/index_subjects'])
      }, error => {
        console.log(error);
      }
    )
  }
}

interface FormCreateSubjectItem {
  label: string;
  name: string;
  placeHolder: string;
}