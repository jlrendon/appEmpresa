import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColoniaService {

  EndPoints:any = {
    all: 'getallColonia'
  }
  constructor(private _http:HttpClient) { 
    
  }

  getColonias(){
    return this._lstColonias;
  }
}
