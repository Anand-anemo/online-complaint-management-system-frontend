import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  constructor(  private userservice:UsersService,
    private router:Router,private _snackBar:MatSnackBar){}
  ngOnInit(): void {
    
  }
  register(userRegister:NgForm){
    console.log(userRegister.value);
    this.userservice.customerRegister(userRegister.value).subscribe(
      (response) => {
        console.log(response);
        this._snackBar.open('Customer Registration done','',{
          duration:4000,
          verticalPosition:'top'
        })

        this.router.navigate(['/admin']);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
