import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../../sevices/dashboard.service';

@Component({
  selector: 'fte-create_subjects',
  templateUrl: './create_subjects.component.html',
  styleUrls: ['./create_subjects.component.scss']
})
export class CreateSubjectsComponent implements OnInit {

  // Inputs

  formCreateSubject = new FormGroup({
    name: new FormControl('', { validators: [ Validators.required ] }),
    quota: new FormControl('', { validators: [ Validators.required ] }),
    registered: new FormControl('', { validators: [ Validators.required ] }),
  });
  

  authorization!: any;

  constructor(private _dashboard: DashboardService, private _router: Router) {
  }


  ngOnInit(): void {
  }

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