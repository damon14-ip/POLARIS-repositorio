import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  insert(formData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/pedido/insert`, formData);
  }

  cambioEstado(idPedido: string, estado: string): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/pedido/estado/${idPedido}`,
      { estado }
    );
  }

  getEstadoPedido(idPedido: string): Observable<string> {
    return this.http.get(
      `${this.baseUrl}/pedido/estado/${idPedido}`,
      { responseType: 'text' }
    );
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pedido/getall`);
  }

  getDetallePedido(idPedido: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pedido/detalle/${idPedido}`);
  }

  
}
