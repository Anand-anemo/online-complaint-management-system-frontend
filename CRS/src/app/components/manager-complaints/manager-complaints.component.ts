import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/_services/complaint.service';
import { Complaint } from 'src/app/models/Complaint.model';

@Component({
  selector: 'app-manager-complaints',
  templateUrl: './manager-complaints.component.html',
  styleUrls: ['./manager-complaints.component.css']
})
export class ManagerComplaintsComponent implements OnInit{
  displayedColumns = ["Id", "Category", "Heading" , "Details", "Address", "UserName", "Status", "assignedTo", "AssignTo"  ];
  complaintsformanager:Complaint[];
  constructor(private complaintService:ComplaintService){}
  ngOnInit(): void {
    this.getComplaintsForManager();
    
  }

  getComplaintsForManager(){
    this.complaintService.getComplaintsListManager().subscribe(
      (res)=>{
        this.complaintsformanager=res;
        console.log(res)

      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
