import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class CursadaComponent {
  /*
  tableItems: TableItems[] = [
    {
      matDef: 'auditUsersButton',
      columnDef: "Audit Users",
      element: 'element',
    },
    {
      matDef: 'id',
      columnDef: "N° Id",
      element: 'element',
    },
  ];      */
  

  // Adim's Table
  ELEMENT_DATA: CurzadaTable[] = [
    { id: 2 },
  ];

  displayedColumns: String[] = ['id', 'auditUsersButton', 'auditSubjectstButton'];
  dataSource = this.ELEMENT_DATA;


  // Student's Table
  ELEMENT_DATA2: CurzadaTable2[] = [
    { id: 1, name: 'Matematicas', quota: 30, registered: 20, createdAt: '31/03/2023', updatedAt: '31/08/2023' },
    { id: 2, name: 'Programacion', quota: 30, registered: 20, createdAt: '31/03/2023', updatedAt: '31/08/2023'  },
    { id: 3, name: 'Ingenieria de Software', quota: 30, registered: 20, createdAt: '31/03/2023', updatedAt: '31/08/2023' },
    { id: 4, name: 'Arquitectura de Computadoras', quota: 30, registered: 20, createdAt: '31/03/2023', updatedAt: '31/08/2023' }
  ];

  displayedColumns2: String[] = ['id', 'name', 'quota', 'registered', 'editButton'];
  dataSource2 = this.ELEMENT_DATA2;


  // Teacher's Table

  ELEMENT_DATA3: CurzadaTable3[] = [
    { user_id: 1, matter_id: 2, nota_1: 3, nota_2: 3, nota_3: 3, createdAt: '31/03/2023', updatedAt: '31/08/2023' },
    { user_id: 1, matter_id: 2, nota_1: 3, nota_2: 3, nota_3: 3, createdAt: '31/03/2023', updatedAt: '31/08/2023' },
    { user_id: 1, matter_id: 2, nota_1: 3, nota_2: 3, nota_3: 3, createdAt: '31/03/2023', updatedAt: '31/08/2023' },
    { user_id: 1, matter_id: 2, nota_1: 3, nota_2: 3, nota_3: 3, createdAt: '31/03/2023', updatedAt: '31/08/2023' },
    { user_id: 1, matter_id: 2, nota_1: 3, nota_2: 3, nota_3: 3, createdAt: '31/03/2023', updatedAt: '31/08/2023' },
  ];
  
  displayedColumns3: String[] = ['user_id', 'matter_id', 'nota_1', 'nota_2', 'nota_3'];
  dataSource3 = this.ELEMENT_DATA3

  role!: any;
  userLogeadoIs!: any;
  userIdIs!: any;
  hide!: any;

  constructor(private _dialog: MatDialog, private _authGuard: AuthGuard, private _dashboard: DashboardService ) {
    this.role = this._authGuard.getUserRole();
    this.userLogeadoIs = this._authGuard.getUserId();
  }
  
  
  // PopUpButton
  popUpEditCalifications(): void {
    const dialogRef = this._dialog.open(EditCalifPopUpComponent, {
      width: '400px',
    });
  }

  getUserSubject(element: any) {
    const id = element.id;
    console.log(id);    
    const datos1 = this._dashboard.getUserSubjects(id).subscribe(
      response => {
        console.log(response.content);

        //this.dataSource3 = new MatTableDataSource(response.content);
      },
    );
  }

  // Search
  formSearch = new FormGroup({
    search: new FormControl('')
  });
}

export interface CurzadaTable {
  id: Number;
}

export interface CurzadaTable2 {
  id: number;
  name: String;
  quota: number;
  registered: number;
  createdAt: String;
  updatedAt: String;
}

export interface CurzadaTable3 {
  user_id: number;
  matter_id: number;
  nota_1: number;
  nota_2: number;
  nota_3: number;
  createdAt: String;
  updatedAt: String;
}

export interface TableItems {
    matDef: string;
    columnDef: string;
    element: string;
}