import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _lstCategorias = [
    {
      id: 1,
      nombre: 'Tlapalería'
    },
    {
      id: 2,
      nombre: 'Papelería'
    },
    {
      id: 3,
      nombre: 'Supermercado'
    },
    {
      id: 4,
      nombre: 'Abarrotes'
    }
  ];
  constructor() { }

  getCategorias(){
    return this._lstCategorias;
  }
}
