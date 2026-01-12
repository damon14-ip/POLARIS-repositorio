import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoItem {
  constructor(
        private httpClient: HttpClient
  ) {}
  public insert(idPedido: string, formData: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/pedidoItem/insert/${idPedido}`, formData);
  }
  
}
