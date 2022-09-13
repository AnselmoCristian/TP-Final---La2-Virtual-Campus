import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FailedComponent, SuccessComponent } from '@fte/shared/components';
import { AuthGuard } from '@fte/shared/guards';
import { EditSubjectsPopUpComponent } from '../../../components/editSubjectsPopUp/editSubjectsPopUp.component';
import { DashboardService } from '../../../sevices/dashboard.service';

@Component({
  selector: 'fte-subjectSubscription',
  templateUrl: './subjectSubscription.component.html',
  styleUrls: ['./subjectSubscription.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class SubjectSubscritionComponent {

  formSubjectsItems: FormSubjectsItem[] = [
    
    {
      colDef: 'id',
      th: 'Id',
      td: 'id',
    },
    {
      colDef: 'name',
      th: 'Name',
      td: 'name',
    },
    {
      colDef: 'quota',
      th: 'Quota',
      td: 'quota',
    },
    {
      colDef: 'registered',
      th: 'Registered',
      td: 'registered',
    },
    {
      colDef: 'createdAt',
      th: 'Update Date',
      td: 'updatedAt',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Role var
  role!: any;
  
  // Subject Form
  displayedColumns: string[] = ['id', 'name', 'quota', 'registered', 'editButton'];
  dataSource = new MatTableDataSource([]);

  //---------------------------------------------------------------------------------------------------
  // Constructor
  constructor(private _dialog: MatDialog, private _authGuard: AuthGuard, private _dashboard: DashboardService ) {
    // Traer role
    this.role = this._authGuard.getUserRole();

    this.getSubject();
  }

  //---------------------------------------------------------------------------------------------------
  
  // Get Subjects Function
  getSubject() {
    const datos1 = this._dashboard.getSubjects().subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response.content);
      },
    );
  }

  //---------------------------------------------------------------------------------------------------

  // Add Subscrition Function
  postSubscriptionSubject(id:any) {
    this._dashboard.postSubscribeToSubject(id).subscribe(
      response => {
        this._dialog.open(SuccessComponent, {
        width: '400px',
        height: '200px',
    });
    setTimeout(() => {
      this._dialog.closeAll();
    }, 750);
      }, error => {
        this._dialog.open(FailedComponent, {
          width: '400px',
          height: '200px',
        });
        setTimeout(() => {
          this._dialog.closeAll();
        }, 750);
        console.log(error);
      }
    )};

    //---------------------------------------------------------------------------------------------------
  
    // Add Subscrition Function
    postAssignSubject(element:any) {
      const id = element;
      this._dashboard.postSubjectAssignement(id).subscribe(
        response => {
          this._dialog.open(SuccessComponent, {
            width: '400px',
            height: '300px',
      });
      setTimeout(() => {
        this._dialog.closeAll();
      }, 750);
        }, error => {
          this._dialog.open(FailedComponent, {
            width: '400px',
            height: '300px',
          });
          setTimeout(() => {
            this._dialog.closeAll();
          }, 750);
          console.log(error);
        }
      )};
    

  //---------------------------------------------------------------------------------------------------

  // Search form
  formSearch = new FormGroup({
    search: new FormControl('')
  });

  // Filter
  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  //---------------------------------------------------------------------------------------------------
}

interface FormSubjectsItem {
  colDef: string;
  th: string;
  td: string;
}