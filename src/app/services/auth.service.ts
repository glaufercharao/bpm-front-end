import {EventEmitter, Injectable} from '@angular/core';
import {User} from "../models/User";
import { Router } from "@angular/router";
import {IntegrationService} from "./integration.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private userAuthentication : boolean = false;
permission:boolean = false;
mostrarMenuEmitter = new EventEmitter<boolean>();
  constructor(private router:Router,
              private service: IntegrationService) { }

  public loginService(user:User){
    this.service.login(user).subscribe( data =>{
      this.permission = data,
        error => {console.log(error.message)}
    })
    if(this.permission){
      this.router.navigate(['/']);
      this.userAuthentication = true;
      this.mostrarMenuEmitter.emit(true);
    } else {
      this.mostrarMenuEmitter.emit(false);
      this.userAuthentication = false;
    }
  }

  public userAuthorized(){
    return this.userAuthentication;
  }
}
