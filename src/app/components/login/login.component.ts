import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    let name = this.loginForm.value.username;
    let pass = this.loginForm.value.password;
    if(localStorage.getItem('name') == name && localStorage.getItem('password') == pass) 
    {
      this._router.navigate(['home']);
    }
    else {
      alert("Wrong username or password, please try again!"); 
    }
  }
}
