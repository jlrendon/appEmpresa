import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isValid: boolean = false ;

  ValidateUser(user, pass) {    
    if(user == "prueba@hotmail.com" && pass == "1234")
      this.isValid = true;
    return this.isValid;
  }

  constructor() { }
}
