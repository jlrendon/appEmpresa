import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent, children: [
    {path: 'Empresa', component: EmpresaComponent},
    {path: 'Producto', component: ProductoComponent},
    {path: 'Busqueda', component: BusquedaComponent}
  ]}, 
  {path:'login', component: LoginComponent},
  {path:'', pathMatch:'full',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
