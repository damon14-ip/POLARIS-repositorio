import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(
        private httpClient: HttpClient
    ) {}
  public getByCategoria(idCategoria:number): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/producto/categoria/${idCategoria}`);
  }

}
