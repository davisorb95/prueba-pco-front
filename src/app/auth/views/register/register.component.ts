import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(),
    email: new FormControl(''),
    password: new FormControl('')
  })
  error: boolean = false
  errorMessage: string = ''

  constructor(
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const user = this.registerForm.value
      const response = await lastValueFrom(this._authService.register(user))
  
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
