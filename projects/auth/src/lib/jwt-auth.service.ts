import { Injectable } from '@angular/core';
import { AuthService } from "@medisphere/core";

@Injectable()
export class JwtAuthService {

  private token : string;

  constructor() { }

  public isAuthenticated(): boolean{
    const token = localStorage.getItem('authToken');
    return token != null;
  }

  public getToken(): string{
    return this.token;
  }

  public setToken(token: string){
    this.token = token;
    if (token) {
      localStorage.setItem('authToken', token );
    } else {
      localStorage.removeItem('authToken');
    }
  }
}