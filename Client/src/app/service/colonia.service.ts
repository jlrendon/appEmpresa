import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColoniaService {

  private _lstColonias = [
    { id: 1, nombre: 'Heroes'},
    { id: 2, nombre: 'Brisas'},
    { id: 3, nombre: 'Col. Méxio'},
    { id: 4, nombre: 'Centro'},
    { id: 5, nombre: 'Frac. Montejo' }
  ];
  constructor() { 

  }

  getColonias(){
    return this._lstColonias;
  }
}
