import { Component, OnInit } from '@angular/core';
import { ComplaintService } from 'src/app/_services/complaint.service';
import { Complaint } from 'src/app/models/Complaint.model';

@Component({
  selector: 'app-customer-complaints',
  templateUrl: './customer-complaints.component.html',
  styleUrls: ['./customer-complaints.component.css']
})
export class CustomerComplaintsComponent implements OnInit {
  displayedColumns = ["Id", "Category", "Heading" , "Details", "Address", "Pincode", "UserName", "Status"  ]; 
  customercomplaints:Complaint[]
  constructor(private complaintService:ComplaintService){}
  ngOnInit(): void {

    this.getCustomerComplaints();
    
  }

  getCustomerComplaints(){
    this.complaintService.getMyComplaints().subscribe(
      (res)=>{
        this.customercomplaints=res;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
