import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaProductoService {

  private lstBusqueda:any = [
    {
      nombre : 'COPYMEX',
      direccion: 'Col. Centro',
      productos: [
        { nombre: 'Libreta', cantidad: 5, precio: '25.99'},
        { nombre: 'Martillo', cantidad: 3, precio: '15.99'}
      ]
    }
  ]
  constructor() { }

  getBusquedaEmpresa(){
    this.lstBusqueda;
  }
}
