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

  private _lstProductosEmpresa = [
    { id: 1, nombre: 'Libreta', precio: '$30', cantidad: '5'  },
    { id: 2, nombre: 'Lapicero', precio: '$20', cantidad: '4' },
    { id: 3, nombre: 'Martillo', precio: '$10', cantidad: '3' },
    { id: 4, nombre: 'Clavos', precio: '$5', cantidad: '2' }
  ];
  
  constructor() { }

  getProductos() {
    return this._lstProductos;
  }

  getProductosEmpresa() {
    return this._lstProductosEmpresa;
  }

  getNombreProducto (_iIdProdudcto){
    return this._lstProductos.find(producto => producto.id == _iIdProdudcto).nombre
  }
}
