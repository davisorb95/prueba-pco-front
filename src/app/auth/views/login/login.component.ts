import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = ''
  password: string = ''
  error: boolean = false
  errorMessage: string = ''

  constructor(
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(loginForm: NgForm) {
    try {
      const email = loginForm.controls['email'].value
      const password = loginForm.controls['password'].value
      
      const response = await lastValueFrom(this._authService.login(email, password))
  
      this.errorMessage = ''
      this.error = false
      localStorage.setItem('userEmail', response.data.email)
      this._router.navigateByUrl('/pco/home')
    } catch (err) {
      if (err instanceof HttpErrorResponse) {
        this.errorMessage = err.error.message
        this.error = true
      }
    }
  }
}
