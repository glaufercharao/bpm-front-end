import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models/Product";
import {IntegrationService} from "../services/integration.service";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.css']
})
export class ListSelectComponent implements OnInit {
  product:Product;
  selectedProduct;
  @Output() selected: EventEmitter<Product> = new EventEmitter();
  constructor(private service:IntegrationService,
              private notification: NotificationService) {

  }

  ngOnInit(): void {
    this.service.getProductForAnalyze().subscribe( data =>{
      this.product = data,
        error => { this.notification.showError(error.toString(),"Analise de solicitações") }
    })
  }

  public onChangeProduct() {
    this.selected.emit(this.selectedProduct)
  }
}
