import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  mostrarMenu:boolean = false;

  constructor(private  authService:AuthService) {
  }
  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => {
        this.mostrarMenu = mostrar;
      }
    );
  }

}
