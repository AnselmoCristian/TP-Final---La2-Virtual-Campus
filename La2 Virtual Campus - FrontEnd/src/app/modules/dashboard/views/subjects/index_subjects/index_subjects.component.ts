import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthGuard } from '@fte/shared/guards';
import { EditSubjectsPopUpComponent } from '../../../components/editSubjectsPopUp/editSubjectsPopUp.component';
import { DashboardService } from '../../../sevices/dashboard.service';

@Component({
  selector: 'fte-index_subjects',
  templateUrl: './index_subjects.component.html',
  styleUrls: ['./index_subjects.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class IndexSubjectsComponent {

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
  
  // PopUpButton
  editPopUp(element: any): void {
    const id = element.id;
    const dialogRef = this._dialog.open(EditSubjectsPopUpComponent, {
      width: '400px',
      data: element,
    }).afterClosed().subscribe(
      response => {      
        if(response) {
          const values = response;
          const edit = this._dashboard.editSubjects(id, values.name, values.quota, values.registered).subscribe(
            response => {
              console.log(response);              
              this.dataSource = new MatTableDataSource([]);
              this.getSubject();
            }
          )
        }
      });
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
    
  // Delete Button
  deleteSubject(id: number) {
    this._dashboard.deleteSubject(id).subscribe(
      response => {
        this.dataSource = new MatTableDataSource([]);
        this.getSubject();
      }
    );
  }
}

interface FormSubjectsItem {
  colDef: string;
  th: string;
  td: string;
}