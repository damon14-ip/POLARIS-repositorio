import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Carrito {
  private carrito: any[] = [];

  agregar(producto: any) {
    const existe = this.carrito.find(p => p.id === producto.id);

    if (existe) {
      existe.cantidad += 1;
    } else {
      this.carrito.push({
        ...producto,
        cantidad: 1
      });
    }

    console.log('🛒 Carrito:', this.carrito);
  }

  obtenerCarrito() {
    return this.carrito;
  }

  limpiar() {
    this.carrito = [];
  }
}
