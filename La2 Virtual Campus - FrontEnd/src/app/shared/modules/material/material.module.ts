import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Angular Material Components.
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs'; 


//Crear Consta
const modules = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatTableModule,
  MatSelectModule,
  MatBottomSheetModule,
  MatRadioModule,
  MatTabsModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
