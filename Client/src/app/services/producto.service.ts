import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private EndPoints:any = {
    save: 'new/relEmpresaProducto'
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json; charset=utf-8'
    })
  };

  private _lstProductos = [
    { id: '5d56078e44f0530908aabd87', nombre: 'Papel Para Impresion' },
    { id: '5d56079b44f0530908aabd88', nombre: 'Suavitel' },
    { id: 3, nombre: 'Martillo' },
    { id: 4, nombre: 'Clavos' }
  ];

  private _lstProductosEmpresa = [
    { id: 1, nombre: 'Libreta', precio: '$30', cantidad: '5'  },
    { id: 2, nombre: 'Lapicero', precio: '$20', cantidad: '4' },
    { id: 3, nombre: 'Martillo', precio: '$10', cantidad: '3' },
    { id: 4, nombre: 'Clavos', precio: '$5', cantidad: '2' }
  ];

  constructor(private _http:HttpClient) { }

  getProductos() {
    return this._lstProductos;
  }

  getProductosEmpresa() {
    return this._lstProductosEmpresa;
  }

  getNombreProducto (_iIdProdudcto){
    return this._lstProductos.find(producto => producto.id == _iIdProdudcto).nombre
  }

  save(data:any){    
    return this._http.post(`${environment.API}${this.EndPoints.save}`, data, this.httpOptions);
  }
}
