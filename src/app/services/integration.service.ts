import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, throwError} from "rxjs";
import {Product} from "../models/Product";


@Injectable({
  providedIn: 'root'
})
export class IntegrationService {
  urlBase: string = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {

  }

  public getProducts():Observable<any> {
    return this.http.get( `${this.urlBase}/products`);
  }

  public getProductForAnalyze():Observable<any> {
    return this.http.get( `${this.urlBase}/products/analyze`);
  }

  public saveProduct(data):Observable<any>{
    let API_URL = `${this.urlBase}/products`
    return this.http.post<any>(API_URL, data, this.httpOptions);
  }


  public updateProduct(data):Observable<any>{
    let API_URL = `${this.urlBase}/products/update/${data.code}`
    return this.http.put<any>(API_URL, data, this.httpOptions);
  }

  public login(data):Observable<any>{
    let API_URL = `${this.urlBase}/user`
    return this.http.post<any>(API_URL, data, this.httpOptions);
  }

}
