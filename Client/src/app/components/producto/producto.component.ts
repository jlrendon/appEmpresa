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
    console.log(form.value);
  }

}

