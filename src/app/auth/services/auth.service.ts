import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../intefaces/user.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICustomResponse } from 'src/app/shared/interfaces/custom-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(email: string, password: string): Observable<ICustomResponse<IUser>> {
    const url = `${environment.api_uri}/auth/login`
    return this._http.post<ICustomResponse<IUser>>(url, { email, password })
  }

  register(user: IUser): Observable<ICustomResponse<IUser>> { 
    const url = `${environment.api_uri}/auth/register`
    return this._http.post<ICustomResponse<IUser>>(url, user)
  }
}
