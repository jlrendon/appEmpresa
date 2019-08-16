import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListThingsComponent } from './components/busqueda/list-things/list-things.component';
import { ListResultsComponent } from './components/busqueda/list-results/list-results.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ProductoComponent } from './components/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    ListThingsComponent,
    ListResultsComponent,
    EmpresaComponent,
    HomeComponent,
    BusquedaComponent,
    ProductoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
