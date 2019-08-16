import { Injectable } from '@angular/core';
import { IAddProducto } from '../interfaces/iadd-producto';
import { ProductoService } from './producto.service';

@Injectable({
  providedIn: 'root'
})
export class ListadeseadoService {

  lstProductos:IAddProducto[] = []
  constructor(private _srvProducto: ProductoService) { }

  getLista(){
    return this.lstProductos;
  }
  
  addProducto(Producto:IAddProducto){
    Producto.producto = this._srvProducto.getNombreProducto(Producto.id);
    this.lstProductos.push(Producto);
  }

  deleteProducto(_iIdProducto:number){
    this.lstProductos.splice( this.lstProductos.findIndex(producto => producto.id == _iIdProducto), 1);
  }
}
