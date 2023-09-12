import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/_services/complaint.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { Complaint } from 'src/app/models/Complaint.model';
import { Role } from 'src/app/models/Role.model';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-complaintregistration',
  templateUrl: './complaintregistration.component.html',
  styleUrls: ['./complaintregistration.component.css']
})
export class ComplaintregistrationComponent implements OnInit {
  
  userDetails: any| User[];
  customer:User;
  role:Role
  complaintDetails: Complaint = {
    category: '',
    heading: '',
    details: '',
    address: '',
    pincode: '',
    fullname: '',
    complaintStatus: '',
    customer: [],
    engusername: ''
  }
  constructor(private complaintService:ComplaintService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private userAuthService:UserAuthService){}
  ngOnInit(): void {

    this.isManager();
  
   
  }

  public registerComplaint(comaplaintForm:NgForm){
    console.log(comaplaintForm.value);
    this.complaintService.regNewComplaint(comaplaintForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this.router.navigate(['/customer']);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  public isManager(){
    return this.userAuthService.isManager();
  }


}
