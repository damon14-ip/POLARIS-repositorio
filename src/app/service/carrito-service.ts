import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito: any[] = [];

  agregar(producto: any) {
    const existe = this.carrito.find(
      p => p.idProducto === producto.idProducto
    );

    if (existe) {
      existe.cantidad++;
    } else {
      this.carrito.push({
        ...producto,
        cantidad: 1
      });
    }
  }

  obtener() {
    return this.carrito;
  }

  total(): number {
    return this.carrito.reduce(
      (s, p) => s + p.precioBase * p.cantidad, 0
    );
  }

  limpiar() {
    this.carrito = [];
  }

}
