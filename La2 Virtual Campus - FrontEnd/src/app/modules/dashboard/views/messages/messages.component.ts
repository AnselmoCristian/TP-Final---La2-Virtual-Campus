import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthGuard } from '@fte/shared/guards';
import { EditPopUpComponent } from '../../components/editPopUp/editPopUp.component';
import { DashboardService } from '../../sevices/dashboard.service';

@Component({
  selector: 'fte-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  formSubjectsItems: FormSubjectsItem[] = [

    {
      colDef: 'id',
      th: 'Id',
      td: 'id',
    },
    {
      colDef: 'email',
      th: 'Email',
      td: 'email',    
    },
    {
      colDef: 'affair',
      th: 'Affair',
      td: 'affair',
    },
    {
      colDef: 'message',
      th: 'Message',
      td: 'message',    
    },
    {
      colDef: 'createdAt',
      th: 'Date',
      td: 'createdAt',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Role var
  role!: any;

  // Authorization var
  authorization!: any;

  // var
  filterById!: any;
  
  // Users Form
  displayedColumns: String[] = ['email', 'affair', 'message', 'editButton' ];
  dataSource = new MatTableDataSource([]);

  //---------------------------------------------------------------------------------------------------
  // Constructor  
  constructor(private _dialog: MatDialog, private _authGuard: AuthGuard, private _dashboard: DashboardService ) {
    // Traer role
    this.role = this._authGuard.getUserRole();

    this.getContactUs();
  }

  //---------------------------------------------------------------------------------------------------
  
  pages!: any;
  // Get Users
  getContactUs() {
    this._dashboard.getContactUs().subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response.content);
        this.pages = response.totalpages;
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
  
  
  
  /* 
  applyFilter(element: any) {
    console.log(element);    
    const filterValue = 'kkkkkkk';
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } */

  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  //---------------------------------------------------------------------------------------------------
      
  // Delete Button
  deleteUser(id: number) {   
    this._dashboard.deleteContactUs(id).subscribe(
      response => {
        this.dataSource = new MatTableDataSource([]);
        this.getContactUs();
      }
    );
  }
}

interface FormSubjectsItem {
  colDef: string;
  th: string;
  td: string;
}