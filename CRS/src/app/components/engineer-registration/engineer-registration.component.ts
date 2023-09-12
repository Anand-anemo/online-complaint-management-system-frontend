import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-engineer-registration',
  templateUrl: './engineer-registration.component.html',
  styleUrls: ['./engineer-registration.component.css']
})
export class EngineerRegistrationComponent implements OnInit {
  constructor(private userservice:UsersService,
    private router:Router){}
  ngOnInit(): void {
    
  }
  register(userRegister:NgForm){
    console.log(userRegister.value);
    this.userservice.engineerRegister(userRegister.value).subscribe(
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
