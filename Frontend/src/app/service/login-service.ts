import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private tokenKey = 'token';
  	constructor(
		private httpClient: HttpClient
	) {}

	public login(formData:any):Observable<any>{
		return this.httpClient.post('http://localhost:8080/empleado/login', formData);
	}

	
	public setToken(token: string): void {
		localStorage.setItem(this.tokenKey, token);
	}

	public getToken(): string | null {
		return localStorage.getItem(this.tokenKey);
	}

	// Cerrar sesión
	public logout(): void {
		localStorage.removeItem(this.tokenKey);
	}

	// Verificar si está logueado
	public isLoggedIn(): boolean {
		return !!this.getToken();
	}
}
