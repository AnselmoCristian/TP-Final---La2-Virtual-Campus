import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './shared/modules/components/components.module';

import { ExternApiService } from './shared/sevices/externApi.service';

import { InterceptorInterceptor } from './modules/dashboard/sevices/interceptor/interceptor.interceptor';
import { SureComponent } from './shared/components/sure/sure.component';

@NgModule({
  declarations: [
    AppComponent,
    SureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    },
    ExternApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
