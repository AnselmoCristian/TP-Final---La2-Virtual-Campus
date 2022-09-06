import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

// Modulo commpartido
import { ComponentsModule, MaterialModule } from '@fte/shared/modules';

// Dashboard Views
import { CreateUserComponent,
  IndexUserComponent,
  CreateSubjectsComponent,
  IndexSubjectsComponent,
  ContactUsComponent} from '@fte/dashboard/views';

// Navbar
import { NavbarComponent } from './components/navbar/navbar.component';
  
// Users + Subjects
import { CursadaComponent } from './views/cursada/cursada.component';

// EditPopUps
import { EditPopUpComponent } from './components/editPopUp/editPopUp.component';
import { EditSubjectsPopUpComponent } from './components/editSubjectsPopUp/editSubjectsPopUp.component';
import { EditCalifPopUpComponent } from './components/editCalifPopUp/editCalifPopUp.component';

import { DashboardService } from './sevices/dashboard.service';
// Service

const views = [
  // Views
  CreateUserComponent,
  IndexUserComponent,
  CreateSubjectsComponent,
  IndexSubjectsComponent,
  CursadaComponent,
  ContactUsComponent,

  // PopUp
  EditPopUpComponent
]

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ...views,
    EditSubjectsPopUpComponent,
    EditCalifPopUpComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[DashboardService],
})
export class DashboardModule { }
