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

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'admin',component:AdminDashboardComponent
  },
  {
    path:'customer',component:CustomerDashboardComponent
  },
  {
    path:'engineer',component:EngineerDashboardComponent
  },
  {
    path:'manager',component:ManagerDashboardComponent
  },
  {
    path:'complaint_register',component:ComplaintregistrationComponent
  },
  {
    path:'register',component:UserRegistrationComponent
  },
  {
    path:'manager_register',component:MangerRegistrationComponent
  },
  {
    path:'engineer_register',component:EngineerRegistrationComponent
  },
  {
    path:'userslist',component:UserslistComponent
  },
  {
    path:'allcomplaints',component:AllcomplaintsComponent
  },
  {
    path:'customer_complaints',component:CustomerComplaintsComponent
  },
  {
    path:'manager_complaints',component:ManagerComplaintsComponent
  },
  {
    path:'engineer_complaints',component:EngineerComplaintsComponent
  },
  {
    path:'assignTo/:cid' , component:AssigncomplaintsComponent
  },
  {
    path:'changeStatus/:cid' , component:AssignstatusComponent
  }
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
