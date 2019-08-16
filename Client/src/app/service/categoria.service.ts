import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  EndPoints:any = {
    all: 'getallColonia'
  }
  constructor(private _http:HttpClient) { }

  getCategorias(){
    return this._http.get(`${environment.API}${this.EndPoints.all}`);
  }
}
