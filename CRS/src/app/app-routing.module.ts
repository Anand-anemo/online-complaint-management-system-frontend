import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { EngineerDashboardComponent } from './components/engineer-dashboard/engineer-dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { MangerRegistrationComponent } from './components/manger-registration/manger-registration.component';
import { EngineerRegistrationComponent } from './components/engineer-registration/engineer-registration.component';
import { ComplaintregistrationComponent } from './components/complaintregistration/complaintregistration.component';
import { UserslistComponent } from './components/userslist/userslist.component';
import { AllcomplaintsComponent } from './components/allcomplaints/allcomplaints.component';
import { CustomerComplaintsComponent } from './components/customer-complaints/customer-complaints.component';
import { ManagerComplaintsComponent } from './components/manager-complaints/manager-complaints.component';
import { EngineerComplaintsComponent } from './components/engineer-complaints/engineer-complaints.component';
import { AssigncomplaintsComponent } from './components/assigncomplaints/assigncomplaints.component';
import { AssignstatusComponent } from './components/assignstatus/assignstatus.component';
import { AuthGuard } from './_services/_auth_guard/auth.guard';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'admin',component:AdminDashboardComponent,canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'customer',component:CustomerDashboardComponent,canActivate:[AuthGuard], data:{roles:['Customer']}
  },
  {
    path:'engineer',component:EngineerDashboardComponent,canActivate:[AuthGuard], data:{roles:['Engineer']}
  },
  {
    path:'manager',component:ManagerDashboardComponent,canActivate:[AuthGuard], data:{roles:['Manager']}
  },
  {
    path:'complaint_register',component:ComplaintregistrationComponent,canActivate:[AuthGuard], data:{roles:['Customer']}
  },
  {
    path:'register',component:UserRegistrationComponent,canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'manager_register',component:MangerRegistrationComponent,canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'engineer_register',component:EngineerRegistrationComponent,canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'userslist',component:UserslistComponent,canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'allcomplaints',component:AllcomplaintsComponent,canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'customer_complaints',component:CustomerComplaintsComponent,canActivate:[AuthGuard], data:{roles:['Customer']}
  },
  {
    path:'manager_complaints',component:ManagerComplaintsComponent,canActivate:[AuthGuard], data:{roles:['Manager']}
  },
  {
    path:'engineer_complaints',component:EngineerComplaintsComponent,canActivate:[AuthGuard], data:{roles:['Engineer']}
  },
  {
    path:'assignTo/:cid' , component:AssigncomplaintsComponent,canActivate:[AuthGuard], data:{roles:['Manager']}
  },
  {
    path:'changeStatus/:cid' , component:AssignstatusComponent,canActivate:[AuthGuard], data:{roles:['Engineer']}
  }
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
