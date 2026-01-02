import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  constructor(
        private httpClient: HttpClient
   ) {}
  
  public insert(formData: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/pedido/insert', formData);
  }
  public getEstado(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/categoria/getallestado');
  }

}
