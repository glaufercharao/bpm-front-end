import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



import {CurrencyMaskModule } from 'ng2-currency-mask';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { FormComponent } from './form/form.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from "primeng/table";
import { AppRoutingModule } from './app-routing.module';
import { InputMaskModule } from "primeng/inputmask";
import { AllSolicitacionComponent } from './all-solicitacion/all-solicitacion.component';
import { KeyFilterModule } from "primeng/keyfilter";
import {DropdownModule} from "primeng/dropdown";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { ListSelectComponent } from './list-select/list-select.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth-guard";







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PainelComponent,
    FormComponent,
    AnalyzeComponent,
    AllSolicitacionComponent,
    PaginaNaoEncontradaComponent,
    ListSelectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CurrencyMaskModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    InputTextModule,
    InputTextareaModule,
    TableModule,
    InputMaskModule,
    KeyFilterModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
