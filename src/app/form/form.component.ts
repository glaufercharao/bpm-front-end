import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


import { IntegrationService } from "../services/integration.service";
import { Product } from "../models/Product";
import {NotificationService} from "../services/notification.service";
import {ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  showComponent:boolean = false;
  disableField:boolean = false;
  disabelButton:boolean = true;
  product : Product;
  input:string;
  item:string;
  titulo:string;
  btnEnviar: string;
  @Input() updateDrop: boolean = false;
  constructor(private service: IntegrationService,
              private notifyService : NotificationService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private notification: NotificationService) {
    if(this.route.snapshot.routeConfig.path == 'analyze'){
      this.titulo = "Analise das requisições de materiais";
      this.btnEnviar = "Analise"
      this.showComponent = true;
      this.disableField = true;
    } else {
      this.showComponent = false;
      this.disableField  = false;
      this.disabelButton = false;
      this.titulo = "Requisição de materiais";
      this.btnEnviar = "Requisição"
    }
  }

  public form: FormGroup = new FormGroup({
    'name': new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ]+$')]),
    'quantity': new FormControl(null,[Validators.required,Validators.minLength(1)]),
    'price': new FormControl(null,[Validators.required,Validators.minLength(1)]),
    'description': new FormControl(null, [Validators.required])

  })

  ngOnInit(): void {

  }

  public edit() {
    if(this.route.snapshot.routeConfig.path == 'analyze') {
      this.saveAnalyze();
    } else {
      this.saveRequestMaterial()
    }
  }

  public saveAnalyze() {
    if(this.product === undefined) {
      this.notifyService.showWarning("Selecione o requisitante",
                                      "Analise de Requisição")
    }
    if (this.item == undefined){
      this.notifyService.showWarning("Selecione analise",
                                      "Analise de Requisição")

    }else {
      this.product.status = this.item;
    }
    if(this.product.status == 'Reprovar') {
      this.product.reason = this.input;
      if (this.product.reason == null || this.product.reason == undefined || this.product.reason == "") {
        this.notifyService.showError("Motivo é de preenchimento obrigatório, já que analise será negada!",
                                       "Analise de Requisição");
      } else {
        this.product.status = "REPROVADO";
        this.service.updateProduct(this.product).subscribe( data =>{
          this.product = data,
            error => { this.notification.showError(error.message, "Analise Requisições") }
        });

        this.notifyService.showSuccess("Analise aprovada com sucesso!",
                                        "Analise de Requisição");
        this.form.reset();
      }
    } else {
      this.product.status = "APROVADO";
      this.service.updateProduct(this.product).subscribe( (data:any) =>{
          this.product =data,
          error =>{ this.notification.showError(error.toString(),"Analise Requisições") }
      });

      this.notifyService.showSuccess("Analise aprovada com sucesso!",
                                   "Analise de Requisição");
      this.form.reset();
    }
  }

  public saveRequestMaterial() {
    if(this.form.status === "INVALID") {
      this.validationFomr();

    } else {
      this.product = new Product(this.form.value.code, this.form.value.name,
        this.form.value.quantity,
        this.form.value.price,
        this.form.value.description,"AGUARDANDO",null)

      this.service.saveProduct(this.product).subscribe( (data:any) => {
        this.product = data,
          error => { this.notification.showError(error.toString(), "Analise Requisições")}
      });

      this.notifyService.showSuccess("Solicitação enviada com sucesso!", "Solicitação de Materiais")
      this.form.reset();
    }
  }

  public save() {
    this.edit()
  }

  public validationFomr() {
    this.notifyService.showError("Preenchimento do formulário é obrigatório!","Solicitação de Materiais")
    this.form.get('name').markAsTouched()
    this.form.get('quantity').markAsTouched()
    this.form.get('price').markAsTouched()
    this.form.get('description').markAsTouched()
  }

  public analyzeSelected(item) {

   this.item = item.name;
  }

  public productSelected(product) {
    if(product == null){
      this.disabelButton = true;
      this.form.reset();
    } else {
      this.product = product;
      this.form = this.formBuilder.group({name:[product.name], quantity:[product.quantity],
        price:[product.price], description:[product.description]})
      this.disabelButton = false;
    }
  }

  public inputTextEmitter(reason){
    this.input = reason;
  }

}
