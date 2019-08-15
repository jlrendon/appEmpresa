import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShown: boolean = false ;
  loginForm: FormGroup;
  constructor(private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('',[Validators.required]),    
    })
  }

  ngOnInit() {                 
  }

  authenticateUser(form) {
    console.log(form.value.email);
    if(form.value.email == "prueba@hotmail.com" && form.value.password == "1234")
      this.router.navigate(['/Home'])
    else
    { 
      this.isShown = true;       
        setTimeout(() => {
          this.isShown = false;   
          
        }, 2000);
    }
   
  }

}
