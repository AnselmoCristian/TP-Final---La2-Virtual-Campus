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
export class IndexSubjectsComponent {

  role!: any;
  
  displayedColumns: string[] = ['id', 'name', 'quota', 'registered', 'editButton'];
  dataSource = new MatTableDataSource([]);
  
  constructor(private _dialog: MatDialog, private _authGuard: AuthGuard, private _dashboard: DashboardService ) {
    // Traer role
    this.role = this._authGuard.getUserRole();

    this.getSubject();
  }


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

  getSubject() {
    // Subjects Array 
    const datos1 = this._dashboard.getSubjects().subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response.content);
      },
    );
  }

  // Search form
  formSearch = new FormGroup({
    search: new FormControl('')
  });
  
  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  deleteSubject(id: number) {
    this._dashboard.deleteSubject(id).subscribe(
      response => {
        this.dataSource = new MatTableDataSource([]);
        this.getSubject();
      }
    );
  }
}

export interface SubjectTable {
  id: number;
  name: string;
  quota: number;
  registered: number;
  createdAt: string;
  updatedAt: string;
}