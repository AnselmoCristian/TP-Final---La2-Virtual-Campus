import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthGuard } from '@fte/shared/guards';
import { forkJoin } from 'rxjs';
import { EditCalifPopUpComponent } from '../../../components/editCalifPopUp/editCalifPopUp.component';
import { DashboardService } from '../../../sevices/dashboard.service';

@Component({
  selector: 'fte-studentsList',
  templateUrl: './studentsList.component.html',
  styleUrls: ['./studentsList.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class StudentsListComponent {
  
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
        colDef: 'dni',
        th: 'DNI',
        td: 'dni',
      },
      {
        colDef: 'note_1',
        th: 'Note',
        td: 'note_1',
      },
      {
        colDef: 'note_2',
        th: 'Note',
        td: 'note_2',
      },
      {
        colDef: 'note_3',
        th: 'Final',
        td: 'note_3',
      },  /* */
    ];
  
    //--------------------------------------------------------------------------------------------------- 
  
    // Role var
    role!: any;
    subjectId!: any;
    userId!: any;
    userName!: any;
    
    
    // Subject Form
    displayedColumns: string[] = ['name', 'dni', 'note_1', 'note_2', 'note_3', 'editButton'];
    dataSource = new MatTableDataSource([]);
  
    //---------------------------------------------------------------------------------------------------
    // Constructor
    constructor(
      private _dialog: MatDialog,
      private _authGuard: AuthGuard,
      private _dashboard: DashboardService,
      private _activatedRoute: ActivatedRoute) {

      this.subjectId = this._activatedRoute.snapshot.paramMap.get('matter_id');

      // Traer role
      this.role = this._authGuard.getUserRole();
           
      this.getStudentList(this.subjectId)
    }
  
    //---------------------------------------------------------------------------------------------------
    
    // PopUpButton

    changeCalificationsPopUp(element: any) {
      const user_id = element;
      this.userId = user_id;
      console.log(user_id);
      
      const dialogRef = this._dialog.open(EditCalifPopUpComponent, {
        width: '400px',       
        height: '100%',
        data: element,
      }).afterClosed().subscribe(
        response => {
          if(response) {
            const values = response;
            this._dashboard.putNota1(user_id, this.subjectId, values.note_1).subscribe(              
              response => {
                this.dataSource = new MatTableDataSource([]);
                this.getStudentList(this.subjectId);
              }
            )
            this._dashboard.putNota2(user_id, this.subjectId, values.note_2).subscribe(
              response => {
                this.dataSource = new MatTableDataSource([]);
                this.getStudentList(this.subjectId);
              }
            )
            this._dashboard.putNota3(user_id, this.subjectId, values.note_3).subscribe(
              response => {
                this.dataSource = new MatTableDataSource([]);
                this.getStudentList(this.subjectId);
              }
            )
          }      
        });
    }
  
    //---------------------------------------------------------------------------------------------------
    
    // Get Student List
    getStudentList(id: number) {
      this._dashboard.getStudentsInscriptedOnaSubject(id).subscribe(
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
    unsuscribeSubject(id: number) {
      this._dashboard.deleteSubject(id).subscribe(
        response => {
          this.dataSource = new MatTableDataSource([]);
          this.getStudentList(id);
        }
      );
    }
  }
  
  interface FormSubjectsItem {
    colDef: string;
    th: string;
    td: string;
  }