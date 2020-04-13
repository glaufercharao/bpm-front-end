import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  constructor(private authService: AuthService) { }

  ngOnInit(){
  }
  public login(){
    console.log(this.user)
    this.authService.loginService(this.user);
  }
}
