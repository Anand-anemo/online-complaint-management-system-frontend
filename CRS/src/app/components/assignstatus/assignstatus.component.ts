import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from 'src/app/_services/complaint.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Component({
  selector: 'app-assignstatus',
  templateUrl: './assignstatus.component.html',
  styleUrls: ['./assignstatus.component.css']
})
export class AssignstatusComponent implements OnInit {
  cId=0;
  complaint
  constructor(private _route:ActivatedRoute,private _complaintService:ComplaintService , private userAuthService:UserAuthService){}
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

    
  }
  Resolved(){
      this.complaint.complaintStatus="RESOLVED";
      
    
        this._complaintService.updateComplaintforeng(this.complaint).subscribe(
          (resp) => {
            console.log(resp);
           // this.router.navigate(['/customer']);
          },
          (error) =>{
            console.log(error);
          }
        )
      
  }
  wip(){
    this.complaint.complaintStatus="WIP";
      
    
        this._complaintService.updateComplaintforeng(this.complaint).subscribe(
          (resp) => {
            console.log(resp);
           // this.router.navigate(['/customer']);
          },
          (error) =>{
            console.log(error);
          }
        )
  }
  Escalated(){
    this.complaint.complaintStatus="ESCALATED";
      
    
        this._complaintService.updateComplaintforeng(this.complaint).subscribe(
          (resp) => {
            console.log(resp);
           // this.router.navigate(['/customer']);
          },
          (error) =>{
            console.log(error);
          }
        )
  }

 

 
}
