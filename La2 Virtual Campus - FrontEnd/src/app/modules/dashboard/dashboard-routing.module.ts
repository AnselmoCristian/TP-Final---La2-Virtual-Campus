import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Users
import { CreateUserComponent } from './views/users/create_user/create_user.component';

//Subjects
import { IndexSubjectsComponent } from './views/subjects/index_subjects/index_subjects.component';
import { CreateSubjectsComponent } from './views/subjects/create_subjects/create_subjects.component';

// Cursada
import { CursadaComponent } from './views/cursada/cursada.component';

//Contact Us
import { ContactUsComponent } from './views/contact_us/contact_us.component';
import { AuthGuard } from '@fte/shared/guards';
import { StudentsListComponent } from './views/UsersSubjects/studentsList/studentsList.component';
import { MessagesComponent } from './views/messages/messages.component';
import { TeachersListComponent } from './views/users/teachersList/teachersList.component';
import { SubjectSubscritionComponent } from './views/UsersSubjects/subjectSubscription/subjectSubscription.component';


const routes: Routes = [
  
  {
    path: 'create_user',
    component: CreateUserComponent
  },
  {
    path: 'teachersList',
    component: TeachersListComponent
  },
  
  // For Subjects
  {
    path: 'index_subjects',
    component: IndexSubjectsComponent
  },
  {
    path: 'create_subjects',
    component: CreateSubjectsComponent
  },
  {
    path: 'studentsList/:matter_id',
    component: StudentsListComponent
  },
  {
    path: 'subjects_subscription',
    component: SubjectSubscritionComponent
  },

  // Home
  {
    path: '',
    canActivate: [AuthGuard],
    component: CursadaComponent
  },

  // Messages
  {
    path: 'messages',
    component: MessagesComponent
  },

  // Contact Us
  {
    path: 'contact_us',
    component: ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }