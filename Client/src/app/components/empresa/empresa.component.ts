import { Component, OnInit } from '@angular/core';
import { ColoniaService } from 'src/app/services/colonia.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { IAddProducto } from 'src/app/interfaces/iadd-producto';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  Colonias: any;
  Categorias: any;
  constructor(private _srvColonia: ColoniaService,
    private _srvCategoria: CategoriaService,
    private _srvEmpresa: EmpresaService) { }


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

  guarda(Empresa) {
    console.log(Empresa.value);
    let data = Empresa.value;
    let empresa: any = {
      cNombre: data.name,
      cDireccion: data.descripcion,
      iIdColonia: data.colonia,
      iIdCategoria: data.categoria
    }
    this._srvEmpresa.save(empresa).subscribe(data => {
      console.log(data);
    });
  }
}
