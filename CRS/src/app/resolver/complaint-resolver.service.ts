import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Complaint } from '../models/Complaint.model';
import { ComplaintService } from '../_services/complaint.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintResolverService implements Resolve<Complaint>{

  constructor( private complaintService:ComplaintService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Complaint[]| Observable <Complaint[]>|Promise<Complaint[]> |any {
    //throw new Error('Method not implemented.');
    const id = route.paramMap.get("id");
    return this.complaintService.getComplaintById(id)
    .pipe(
      map(
        (X : Complaint[], i) => X.map((complaint :  Complaint) => (complaint))
      )
    ); 
  }
}
