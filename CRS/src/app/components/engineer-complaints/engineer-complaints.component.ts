import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/_services/complaint.service';
import { Complaint } from 'src/app/models/Complaint.model';

@Component({
  selector: 'app-engineer-complaints',
  templateUrl: './engineer-complaints.component.html',
  styleUrls: ['./engineer-complaints.component.css']
})
export class EngineerComplaintsComponent implements OnInit {
  displayedColumns = ["Id", "Category", "Heading" , "Details", "Address", "UserName", "Status", "assignTo", "Edit"  ];
  complaintsforeng:Complaint[];
  constructor(private complaintService:ComplaintService){}
  ngOnInit(): void {
    this.getcomforeng();
  }
  getcomforeng(){
    this.complaintService.getComplaintListEngineer().subscribe(
      (res)=>{
        this.complaintsforeng=res;
        console.log(res)

      },
      (error)=>{
        console.log(error)
      }
    );
  }

}
