import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { Role } from 'src/app/models/Role.model';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit{
  displayedColumns = ["Full Name", "User Name", "Role"   ]; 

  userinfo: any|Role| User[];
constructor(private userService:UsersService,){}
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe( 
      (resp) =>{
        this.userinfo = resp;
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    //   data=>{
    //   console.log(data);
    //   this.userinfo = data;
    // }
    );
  }
  // public deleteUser(userName){
  //   console.log(userName);
  //   this.userService.deleteUser(userName).subscribe((resp)=>{
  //     console.log(resp);
  //     this.getAllUsers();
  //   },
  //   (error:HttpErrorResponse)=>{
  //     console.log(error);
  //   })
  // }

}
