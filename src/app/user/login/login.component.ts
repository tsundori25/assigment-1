import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    public fb: FormBuilder, 
    public authService: AuthService,
    public router: Router
  ) { 
    this.loginForm = this.fb.group({
      username:[''],
      email:[''],
      password:['']
    })
  }
  

  ngOnInit(): void {
    
  }

  login(){
    this.authService.login(this.loginForm.value)
  }

}
