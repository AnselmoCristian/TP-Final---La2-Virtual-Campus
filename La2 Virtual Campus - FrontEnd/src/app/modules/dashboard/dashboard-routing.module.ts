import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Users
import { IndexUserComponent } from './views/users/index_user/index_user.component';
import { CreateUserComponent } from './views/users/create_user/create_user.component';

//Subjects
import { IndexSubjectsComponent } from './views/subjects/index_subjects/index_subjects.component';
import { CreateSubjectsComponent } from './views/subjects/create_subjects/create_subjects.component';

// Cursada
import { CursadaComponent } from './views/cursada/cursada.component';

//Contact Us
import { ContactUsComponent } from './views/contact_us/contact_us.component';
import { AuthGuard } from '@fte/shared/guards';


const routes: Routes = [
  
  // For Users
  {
    path: 'index_user',
    component: IndexUserComponent
  },
  {
    path: 'create_user',
    component: CreateUserComponent
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

  // Home
  {
    path: '',
    canActivate: [AuthGuard],
    component: CursadaComponent
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
