import { Component, OnInit } from '@angular/core';
import { ColoniaService } from 'src/app/service/colonia.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { IAddProducto } from 'src/app/interfaces/iadd-producto';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  Colonias: any;
  Categorias: any;
  constructor(private _srvColonia: ColoniaService, private _srvCategoria: CategoriaService) { }

  ngOnInit() {
    this.getColonias();
    this.getCategorias();
  }

  getColonias() {
    /** Funcion para obtener las Colonias*/
    this._srvColonia.getColonias().subscribe(data => {
      this.Colonias = data;
    });
  }
  getCategorias() {
    /** Funcion para obtener las Categorias */
    this._srvCategoria.getCategorias().subscribe(data => {
      this.Categorias = data;
    });
  }
}
