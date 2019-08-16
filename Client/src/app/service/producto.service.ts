import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _lstProductos = [
    { id: 1, nombre: 'Libreta' },
    { id: 2, nombre: 'Lapicero' },
    { id: 3, nombre: 'Martillo' },
    { id: 4, nombre: 'Clavos' }
  ];
  
  constructor() { }

  getProductos() {
    return this._lstProductos;
  }

  getNombreProducto (_iIdProdudcto){
    return this._lstProductos.find(producto => producto.id == _iIdProdudcto).nombre
  }
}
