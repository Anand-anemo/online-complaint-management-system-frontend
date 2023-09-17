import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  dup=this.complaintDetails.fullname;
  constructor(private complaintService:ComplaintService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private userAuthService:UserAuthService,
    private _snackBar:MatSnackBar){}
  ngOnInit(): void {

    this.isManager();
  
   
  }

  public registerComplaint(comaplaintForm:NgForm){
    console.log(comaplaintForm.value);
    this.complaintService.regNewComplaint(comaplaintForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this._snackBar.open('Complaint Registration Done','',{
          duration:4000,verticalPosition:'top'
        })

        this.router.navigate(['/customer']);
      },
      (error) =>{
        console.log(error);
      }
    )

    console.log(this.dup);
  }

  public isManager(){
    return this.userAuthService.isManager();
  }


}
