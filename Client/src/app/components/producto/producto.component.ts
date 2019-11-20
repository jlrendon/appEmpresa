import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productosempresa:any;
  productos:any;
  productForm: FormGroup;
  constructor(private ProductoSvc: ProductoService, private router: Router) {
    this.productForm = new FormGroup({
        cantidad: new FormControl('', [Validators.email, Validators.required]),
        precio: new FormControl('',[Validators.required]),
        producto: new FormControl('')          
    })
  }

  ngOnInit() {
    this.getProducts();
    this.getAllProducts();
  }

  getAllProducts(){    
    this.productosempresa = this.ProductoSvc.getProductosEmpresa();
  }

  getProducts(){
    this.productos  =  this.ProductoSvc.getProductos();
    console.log(this.productos);
  }

  RegisterProduct(form) {    
    let data = form.value;
    let productoempresa: any = {
      iIdEmpresa: '5d56646977a8b11558080479',
      iIdProducto: data.idproducto,    
      dPrecio: data.precio,
      iDisponible: data.cantidad
    }
    console.log(productoempresa);
    this.ProductoSvc.save(productoempresa).subscribe(data => {
      console.log(data);
    });
  }

}

