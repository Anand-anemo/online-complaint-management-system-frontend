import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from 'src/app/_services/complaint.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UsersService } from 'src/app/_services/users.service';
import { Complaint } from 'src/app/models/Complaint.model';
import { Role } from 'src/app/models/Role.model';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-assigncomplaints',
  templateUrl: './assigncomplaints.component.html',
  styleUrls: ['./assigncomplaints.component.css']
})
export class AssigncomplaintsComponent implements OnInit {
  enginfo: any|Role| User[];
  cId=0;
  complaint
  constructor(private _route:ActivatedRoute,private _complaintService:ComplaintService , private userAuthService:UserAuthService,
    private userService:UsersService,private _snackBar:MatSnackBar,private router:Router){}
  ngOnInit(): void {
    this.cId=this._route.snapshot.params['cid']

    this._complaintService.getComplaintById(this.cId).subscribe(
      (data:any)=>{
        this.complaint=data;
        console.log(this.complaint);
      },
      (error)=>{
        console.log(error);
      }
    );

    this.userService.engineerslist().subscribe(
      (resp) =>{
        this.enginfo = resp;
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );


    
  }
  
  public updateComplaint(){
    
    this._complaintService.updateComplaint(this.complaint).subscribe(
      (resp) => {
        console.log(resp);
        this._snackBar.open('Complaint Assigned Successfully','',{
          duration:4000,verticalPosition:'top'
        })

        this.router.navigate(['/manager']);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  public isCustomer(){
    return this.userAuthService.isCustomer();
  }

}
