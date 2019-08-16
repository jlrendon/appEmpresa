import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShown: boolean = false;
  loginForm: FormGroup;
  constructor(private LoginSvc: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
  }

  authenticateUser(form) {
    console.log(form.value.email);
    if (this.LoginSvc.ValidateUser(form.value.email, form.value.password)) {
      this.router.navigate(['/Home'])
    }
    else {
      this.isShown = true;
      setTimeout(() => {
        this.isShown = false;
      }, 2000);
    }
  }
}
