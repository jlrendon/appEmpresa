import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private EndPoints:any = {
    save: 'new/Empresa'
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json; charset=utf-8'
    })
  };
  
  constructor( private _http:HttpClient) { }

  save(data:any){
    return this._http.post(`${environment.API}${this.EndPoints.save}`, data, this.httpOptions);
  }
}
