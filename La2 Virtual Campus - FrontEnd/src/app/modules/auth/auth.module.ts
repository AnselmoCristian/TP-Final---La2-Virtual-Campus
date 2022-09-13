import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

import { ComponentsModule, MaterialModule } from '@fte/shared/modules';
import { LoginComponent, RegisterComponent } from '@fte/auth/views';

// Services
import { AuthService } from '../auth/sevices/auth.service';

const views = [LoginComponent, RegisterComponent];



@NgModule({
  declarations: [
    AuthComponent,
    ...views,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService]
})
export class AuthModule { }
