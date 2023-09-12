import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/_services/complaint.service';
import { Complaint } from 'src/app/models/Complaint.model';

@Component({
  selector: 'app-allcomplaints',
  templateUrl: './allcomplaints.component.html',
  styleUrls: ['./allcomplaints.component.css']
})
export class AllcomplaintsComponent implements OnInit{
  displayedColumns = ["Id", "Category", "Heading" , "Details", "Address", "Pincode", "UserName", "Status", "assignTo" , "Delete"  ]; 
  complaintsinfo:Complaint[]
  constructor(private complaintService:ComplaintService){}
  ngOnInit(): void {
    this.getAllComplaint();
  }
  getAllComplaint(){
    this.complaintService.getComplaintList().subscribe(
      (res)=>{
        this.complaintsinfo=res;
        console.log(res);

      },
    (error)=>{
      console.log(error);
    }
    )
  }

  public deleteUser(complaintId){
    console.log(complaintId);
    this.complaintService.deleteComplaint(complaintId).subscribe((resp)=>{
      console.log(resp);
      this.getAllComplaint();
    },
    (error:HttpErrorResponse)=>{
      console.log(error);
    })
  }

}
