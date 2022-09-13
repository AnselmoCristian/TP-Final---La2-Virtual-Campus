import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthGuard } from '@fte/shared/guards';
import { EditPopUpComponent } from '../../../components/editPopUp/editPopUp.component';
import { DashboardService } from '../../../sevices/dashboard.service';

@Component({
  selector: 'fte-teachersList',
  templateUrl: './teachersList.component.html',
  styleUrls: ['./teachersList.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class TeachersListComponent {

  formTeachersItems: FormTeachersItem[] = [

    {
      colDef: 'id',
      th: 'N° Id',
      td: 'id',
    },
    {
      colDef: 'name',
      th: 'Names',
      td: 'name',
    },
    {
      colDef: 'email',
      th: 'Emails',
      td: 'email',
    },
    {
      colDef: 'createdAt',
      th: 'Creation Date',
      td: 'createdAt',
    },
    {
      colDef: 'updatedAt',
      th: 'Upadated Date',
      td: 'updatedAt',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Role var
  role!: any;

  // Authorization var
  authorization!: any;
  
  // Users Form
  displayedColumns: String[] = ['name', 'email', 'createdAt', 'updatedAt'];
  dataSource = new MatTableDataSource([]);

  //---------------------------------------------------------------------------------------------------
  // Constructor  
  constructor(private _dialog: MatDialog, private _authGuard: AuthGuard, private _dashboard: DashboardService ) {
    // Traer role
    this.role = this._authGuard.getUserRole();

    this.getTeachers();
  }

  //---------------------------------------------------------------------------------------------------
  
  // Get Users
  getTeachers() {
    this._dashboard.getTeachers().subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response.content);
      }, error => {
        console.log(error);        
      }
    )
  }

  //---------------------------------------------------------------------------------------------------

  // Filter
  formSearch = new FormGroup({
    search: new FormControl('')
  });

  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  //---------------------------------------------------------------------------------------------------
}

interface FormTeachersItem {
  colDef: string;
  th: string;
  td: string;
}