import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  EndPoints:any = {
    all: 'getAllCategoria'
  }
  constructor(private _http:HttpClient) { }

  getCategorias(){
    return this._lstCategorias;
  }
}
