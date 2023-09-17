import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AuthGuard } from './_services/_auth_guard/auth.guard';
import { AuthInterceptor } from './_services/interceptor/auth.interceptor';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { EngineerDashboardComponent } from './components/engineer-dashboard/engineer-dashboard.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { ComplaintregistrationComponent } from './components/complaintregistration/complaintregistration.component';
import { MangerRegistrationComponent } from './components/manger-registration/manger-registration.component';
import { EngineerRegistrationComponent } from './components/engineer-registration/engineer-registration.component';
import { AllcomplaintsComponent } from './components/allcomplaints/allcomplaints.component';
import { CustomerComplaintsComponent } from './components/customer-complaints/customer-complaints.component';
import { ManagerComplaintsComponent } from './components/manager-complaints/manager-complaints.component';
import { EngineerComplaintsComponent } from './components/engineer-complaints/engineer-complaints.component';
import { AssigncomplaintsComponent } from './components/assigncomplaints/assigncomplaints.component';
import { AssignstatusComponent } from './components/assignstatus/assignstatus.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    ManagerDashboardComponent,
    EngineerDashboardComponent,
    UserRegistrationComponent,
    UserslistComponent,
    ComplaintregistrationComponent,
    MangerRegistrationComponent,
    EngineerRegistrationComponent,
    AllcomplaintsComponent,
    CustomerComplaintsComponent,
    ManagerComplaintsComponent,
    EngineerComplaintsComponent,
    AssigncomplaintsComponent,
    AssignstatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
    ,MatTableModule
    ,MatIconModule
    ,MatDialogModule,
    MatButtonToggleModule,
    FormsModule,
    MatSelectModule
    
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
