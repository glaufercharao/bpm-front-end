import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {FormComponent} from "./form/form.component";
import {AllSolicitacionComponent} from "./all-solicitacion/all-solicitacion.component";
import {PaginaNaoEncontradaComponent} from "./pagina-nao-encontrada.component";
import { LoginComponent } from "./login/login.component";
import {AuthGuard} from "./guards/auth-guard";

const routes: Routes =[
  { path:  '', component: FormComponent },
  { path:  'login', component: LoginComponent },
  { path:  'solicitation', component: FormComponent },
  { path:  'analyze', component: FormComponent,
    canActivate:[AuthGuard]},
  { path: 'all-solicitation', component: AllSolicitacionComponent,
    canActivate:[AuthGuard]},
  { path:  '**', component: PaginaNaoEncontradaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
