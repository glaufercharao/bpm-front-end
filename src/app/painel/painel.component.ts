import { Component, OnInit } from '@angular/core';
import {IntegrationService} from "../services/integration.service";
import {Product} from "../models/Product";


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
product:Product;

  constructor(private service:IntegrationService) { }

  ngOnInit(): void {
  }
}
