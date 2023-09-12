import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-manger-registration',
  templateUrl: './manger-registration.component.html',
  styleUrls: ['./manger-registration.component.css']
})
export class MangerRegistrationComponent implements OnInit {
  constructor(private userservice:UsersService,
    private router:Router){}
  ngOnInit(): void {
   
  }
  register(userRegister:NgForm){
    console.log(userRegister.value);
    this.userservice.managerRegister(userRegister.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
