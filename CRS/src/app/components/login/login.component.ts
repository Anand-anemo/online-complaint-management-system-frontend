import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:any
  constructor(  private userService:UsersService,
    private userAuthService:UserAuthService,
    private router:Router,
    private _snackbar:MatSnackBar){}
  ngOnInit(): void {
    
  }

  login(loginForm:NgForm){
    this.userService.login(loginForm.value).subscribe((response:any)=>{
      console.log(response);//this response contains the entered userdata
      // console.log(response.jwtToken);
      // console.log(response.user.role);
      this._snackbar.open('login successful','',{
        duration:4000,
        verticalPosition:'top'
      })

      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.jwtToken);

      const role = response.user.role[0].roleName;//the value of role= Admin or User is present inside
      //user-->role-->roleName
      if(role =='Admin'){
        this.router.navigate(['/admin']);
      }
      else if(role =='Customer'){
        this.router.navigate(['/customer']);
      }
      else if(role =='Manager'){
        this.router.navigate(['/manager']);
      }
      else if(role =='Engineer'){
        this.router.navigate(['/engineer']);
      }
      else{
        this.msg = "Entered Credentials are incorrect";
      }
    },
    (error)=>{
      this.msg = "Entered Credentials are incorrect, Please try again!!";
      console.log(error);
    });
    console.log("Form is submitted");
    // console.log(loginForm.value); //This will print data values input in the form and print the console
  }

  registerUser(){
    this.router.navigate(['/customerReg']);
  }

}
