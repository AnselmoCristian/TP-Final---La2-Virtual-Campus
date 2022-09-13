import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AuthGuard } from '@fte/shared/guards';
import { EditCalifPopUpComponent } from '../../components/editCalifPopUp/editCalifPopUp.component';
import { DashboardService } from '../../sevices/dashboard.service';

@Component({
  selector: 'fte-cursada',
  templateUrl: './cursada.component.html',
  styleUrls: ['./cursada.component.scss']
})

//---------------------------------------------------------------------------------------------------
export class CursadaComponent {

  formTeacherItems: FormTeacherItem[] = [
    
    {
      colDef: 'registered',
      th: 'Subject\'s Registered',
      td: 'registered',
    },
  ];

  //---------------------------------------------------------------------------------------------------

  formStudentsItems: FormStudentsItem[] = [
    
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
    },
  ];

  //---------------------------------------------------------------------------------------------------

  // Student's Table
  displayedColumns2: String[] = [ 'name', 'note_1', 'note_2', 'note_3', 'editButton'];
  dataSource2 = new MatTableDataSource([]);

  //---------------------------------------------------------------------------------------------------

  // Teacher's Table  
  displayedColumns3: String[] = [ 'id', 'name', 'registered', 'editButton'];
  dataSource3 = new MatTableDataSource([]);

  //---------------------------------------------------------------------------------------------------

  // Role var
  role!: any;
  
  // userLogeadoIs var
  userLogeadoIs!: any;

  //---------------------------------------------------------------------------------------------------
  // Constructor
  constructor(private _dialog: MatDialog, private _authGuard: AuthGuard, private _dashboard: DashboardService ) {
    this.role = this._authGuard.getUserRole();
    this.userLogeadoIs = this._authGuard.getUserId();

    this.getUserSubject();
    this.getStudentSubjects();
  }

  //---------------------------------------------------------------------------------------------------

  // Unassign Teacher Subject
  unassignTeacherSubject(element: any): void {
    const id = element;
    console.log(id);    
    this._dashboard.deleteSubjectAssign(id).subscribe(
      response => {
        this.dataSource2 = new MatTableDataSource([]);
        this.getUserSubject();
      }, error => {
        console.log(error);
      }
    )
  }

  //---------------------------------------------------------------------------------------------------

  // Get Students Subject List
  getStudentSubjects() {
    if(this.role === 'student') {
    this._dashboard.getStudentSubjects().subscribe(
      response => {
        this.dataSource2 = new MatTableDataSource(response.content);
        },
      );
    }
  }

  //---------------------------------------------------------------------------------------------------
  
  // Get User Subjects Function
  getUserSubject() {
    if(this.role === 'teacher') {
    const datos = this._dashboard.getUsersSubjects().subscribe(
      response => {
        this.dataSource3 = new MatTableDataSource(response.content);
        },
      );
    }
  }

  //---------------------------------------------------------------------------------------------------

  // Delete Subscription to a Subject
  UnsubscribeSubject(id:any) {
    this._dashboard.deleteUnsubscribeToSubject(id).subscribe(
      response => {
        this.dataSource2 = new MatTableDataSource([]);
        this.getStudentSubjects();
      }
    );

  }

  //---------------------------------------------------------------------------------------------------
  
  // Search form
  formSearch = new FormGroup({
    search: new FormControl('')
  });

  // Filter
  applyFilter2(event: Event) {
    const filterValue2 = (
      event.target as HTMLInputElement).value;
      this.dataSource2.filter = filterValue2.trim().toLowerCase();
  }

  // Filter
  applyFilter3(event: Event) {
    const filterValue3 = (
      event.target as HTMLInputElement).value;
      this.dataSource3.filter = filterValue3.trim().toLowerCase();
  }

  //---------------------------------------------------------------------------------------------------
}

interface FormStudentsItem {
  colDef: string;
  th: string;
  td: string;
}

interface FormTeacherItem {
  colDef: string;
  th: string;
  td: string;
}