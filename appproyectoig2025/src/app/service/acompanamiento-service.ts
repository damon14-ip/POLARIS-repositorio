import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// En acompañamiento-service.ts
@Injectable({
  providedIn: 'root',
})
export class AcompanamientoService {
  constructor(private httpClient: HttpClient) {}

 
  public getAllTopping(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/acompanamiento/topping');
  }

  public getAllSalsas(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/acompanamiento/salsas');
  }

  public getByProducto(idProducto: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `http://localhost:8080/producto-acompanamiento/getbyproducto/${idProducto}`
    );
  }
}