import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListadeseadoService } from 'src/app/services/listadeseado.service';
import { IAddProducto } from 'src/app/interfaces/iadd-producto';
import { EmpresaProductoService } from 'src/app/services/empresa-producto.service';

@Component({
  selector: 'app-list-things',
  templateUrl: './list-things.component.html',
  styles: []
})
export class ListThingsComponent implements OnInit {
  
  Productos:any;
  ListaProducto: IAddProducto[] = [];
  //formAddProducto: FormGroup;
  constructor(private _srvProducto: ProductoService, 
    private _srvListaProducto: ListadeseadoService,
    private _srvEmpresaProducto: EmpresaProductoService) { 
    /*this.formAddProducto = new FormGroup({
       producto : new FormControl('', [Validators.required]),
       cantidad : new FormControl('', [Validators.required, Validators.maxLength(2)]) 
    });*/
  }

  ngOnInit() {
    this.getProductos();
    this.ListaProducto  = this._srvListaProducto.getLista();
  }

  getProductos(){
    this.Productos  =  this._srvProducto.getProductos();
  }
  

  addProducto(_form:any){
    /** Función para agregar productos a la lista de Productos */

    let producto:IAddProducto = {
      id: _form.value.producto, 
      producto:'',    
      cantidad: _form.value.cantidad
    }
    this._srvListaProducto.addProducto(producto);
  }

  delProducto(id:number){
    /** Función para eliminar un producto de la lista de Productos */
    console.log('Eliminar');
    this._srvListaProducto.deleteProducto(id);
  }

  search(){
    /** Función para buscar las empresas que tengan disponibilidad de 
        los productos que se desean  
    */

    let data = {
      nombre : 'COPYMEX',
      direccion: 'Col. Centro',
      productos: [
        { nombre: 'Libreta', cantidad: 5, precio: '25.99'},
        { nombre: 'Martillo', cantidad: 3, precio: '15.99'}
      ]
    }
    this._srvEmpresaProducto.search(data);
    console.log('Busqueda de empresas');
  }
}
