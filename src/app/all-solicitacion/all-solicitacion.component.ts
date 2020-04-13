import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Product";
import {IntegrationService} from "../services/integration.service";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-all-solicitacion',
  templateUrl: './all-solicitacion.component.html',
  styleUrls: ['./all-solicitacion.component.css']
})
export class AllSolicitacionComponent implements OnInit {
  products: Array<Product> = new Array<Product>()
  cols: any[];
  statusColor: string;
  constructor(private service: IntegrationService,
              private notification: NotificationService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Nome do Solicitante' },
      { field: 'quantity', header: 'Quantidade' },
      { field: 'price', header: 'Preço' },
      { field: 'description', header: 'Descrição' },
      { field: 'status', header: 'Ação' }

    ];

    this.service.getProducts().subscribe(data =>{
      this.products = data,
        error => { this.notification.showError(error.toString(),"Toda as Requisições")}
    });
  }
  public statusColors(status:string) {
    this.statusColor = "";
    if(status === 'AGUARDANDO') {
      this.statusColor = 'warning';
    } else if(status === 'APROVADO') {
      this.statusColor = 'success';
    }else {
      this.statusColor = 'danger';
    }
    return this.statusColor;
  }

}
