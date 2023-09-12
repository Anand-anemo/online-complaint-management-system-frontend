import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(  private userAuthService:UserAuthService,
    private router:Router,
    public userService:UsersService){}
  ngOnInit(): void {
    
  }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['']);
  }

  public isAdmin(){
   return this.userAuthService.isAdmin();
  }

  public isCustomer(){
    return this.userAuthService.isCustomer();
  }

  public isManager(){
    return this.userAuthService.isManager();
  }

  public isEngineer(){
    return this.userAuthService.isEngineer();
  }

}
