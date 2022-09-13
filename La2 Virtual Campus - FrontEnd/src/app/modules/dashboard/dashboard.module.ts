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
  ContactUsComponent,
} from '@fte/dashboard/views';
  
  import { StudentsListComponent } from './views/UsersSubjects/studentsList/studentsList.component';
  
// Navbar
import { NavbarComponent } from './components/navbar/navbar.component';
  
// Users + Subjects
import { CursadaComponent } from './views/cursada/cursada.component';

// EditPopUps
import { EditPopUpComponent } from './components/editPopUp/editPopUp.component';
import { EditSubjectsPopUpComponent } from './components/editSubjectsPopUp/editSubjectsPopUp.component';
import { EditCalifPopUpComponent } from './components/editCalifPopUp/editCalifPopUp.component';

// Service
import { DashboardService } from './sevices/dashboard.service';
import { MessagesComponent } from './views/messages/messages.component';
import { TeachersListComponent } from './views/users/teachersList/teachersList.component';
import { SubjectSubscritionComponent } from './views/UsersSubjects/subjectSubscription/subjectSubscription.component';

const views = [
  // Views
  CreateUserComponent,
  IndexUserComponent,
  CreateSubjectsComponent,
  IndexSubjectsComponent,
  ContactUsComponent,
  CursadaComponent,
]

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ...views,
    EditPopUpComponent,
    EditSubjectsPopUpComponent,
    EditCalifPopUpComponent,
    StudentsListComponent,
    MessagesComponent,
    TeachersListComponent,
    SubjectSubscritionComponent,
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
