import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthGuard } from '@fte/shared/guards';
import { EditPopUpComponent } from '../../../components/editPopUp/editPopUp.component';
import { DashboardService } from '../../../sevices/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'fte-index-user',
  templateUrl: './index_user.component.html',
  styleUrls: ['./index_user.component.scss']
})
export class IndexUserComponent {


  displayedColumns: String[] = ['role', 'id', 'name', 'email', 'dni', 'editButton'];
  dataSource = new MatTableDataSource([]);

  role!: any;
  authorization!: any;
  
  constructor(private _dialog: MatDialog, private _authGuard: AuthGuard, private _dashboard: DashboardService ) {
    // Traer role
    this.role = this._authGuard.getUserRole();

    this.getUser();
  }


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
  //----------------------------------------------------------------------------

  getUser() {
    const service = forkJoin({
      servicio1: this._dashboard.getAdmins(),
      servicio2:this._dashboard.getTeachers(),
      servicio3: this._dashboard.getStudents()
  });

  service.subscribe(
    res => {
      const carlos: any = [...res.servicio1.content, ...res.servicio2.content, ...res.servicio3.content]
      this.dataSource =  new MatTableDataSource(carlos);
    }
    )
  }

  //----------------------------------------------------------------------------
  
  // Search form
  formSearch = new FormGroup({
    search: new FormControl('')
  });

  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  //----------------------------------------------------------------------------

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