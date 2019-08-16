import { Component, OnInit } from '@angular/core';
import {ColoniaService } from 'src/app/service/colonia.service';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  Colonias:any;
  Categorias:any;
  constructor(private _srvColonia: ColoniaService, private _srvCategoria: CategoriaService) { }

  ngOnInit() {

    this.getInfoInicial();
  }

  getInfoInicial() {
    /** Funcion para obtener las Colonias y Categorias */
    this.Colonias  = this._srvColonia.getColonias();
    this.Categorias = this._srvCategoria.getCategorias();
  }
}
