import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthGuard } from '@fte/shared/guards';
import { EditPopUpComponent } from '../../../components/editPopUp/editPopUp.component';
import { DashboardService } from '../../../sevices/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fte-index-user',
  templateUrl: './index_user.component.html',
  styleUrls: ['./index_user.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class IndexUserComponent {

  formSubjectsItems: FormSubjectsItem[] = [

    {
      colDef: 'role',
      th: 'Role',
      td: 'role',
    },    
    {
      colDef: 'id',
      th: 'Id',
      td: 'id',
    },
    {
      colDef: 'name',
      th: 'Name',
      td: 'name',
    },{
      colDef: 'email',
      th: 'Email',
      td: 'email',
    },
    {
      colDef: 'dni',
      th: 'DNI',
      td: 'dni',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Role var
  role!: any;

  // Authorization var
  authorization!: any;
  
  // Users Form
  displayedColumns: String[] = ['role', 'id', 'name', 'email', 'dni', 'editButton'];
  dataSource = new MatTableDataSource([]);

  //---------------------------------------------------------------------------------------------------
  // Constructor  
  constructor(private _dialog: MatDialog, private _authGuard: AuthGuard, private _dashboard: DashboardService ) {
    // Traer role
    this.role = this._authGuard.getUserRole();

    this.getUser();
  }

  //---------------------------------------------------------------------------------------------------

  // PopUpButton
  popUpEditUser(element: any): void {
    const id = element.id;
    const dialogRef = this._dialog.open(EditPopUpComponent, {
      width: '400px',
      data: element,
    }).afterClosed().subscribe(
      response => {      
        if(response) {
          const values = response;
          const edit = this._dashboard.editUsers(id, values.name, values.email, values.dni, values.role).subscribe(
            response => {
              console.log(response);              
              this.dataSource = new MatTableDataSource([]);
              this.getUser();
            }
          )
        }
      });
  }

  //---------------------------------------------------------------------------------------------------
  
  // Get Users
  getUser() {
    this._dashboard.getAdmins().subscribe(
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
      
  // Delete Button
  deleteUser(id: number) {   
    this._dashboard.deleteUsers(id).subscribe(
      response => {
        this.dataSource = new MatTableDataSource([]);
        this.getUser();
      }
    );
  }
}

interface FormSubjectsItem {
  colDef: string;
  th: string;
  td: string;
}