import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private items: any[] = [];

  agregar(producto: any) {

    const index = this.items.findIndex(
      p =>
        p.idProducto === producto.idProducto &&
        JSON.stringify(p.salsas) === JSON.stringify(producto.salsas) &&
        JSON.stringify(p.toppings) === JSON.stringify(producto.toppings)
    );

    if (index >= 0) {
      this.items[index].cantidad++;
    } else {
      this.items.push({
        ...producto,
        cantidad: 1
      });
    }
  }

  obtenerItems() {
    return this.items;
  }

  aumentar(index: number) {
    this.items[index].cantidad++;
  }

  disminuir(index: number) {
    if (this.items[index].cantidad > 1) {
      this.items[index].cantidad--;
    }
  }

  eliminar(index: number) {
    this.items.splice(index, 1);
  }

  limpiar() {
    this.items = [];
  }

  total() {
    return this.items.reduce(
      (sum, item) => sum + item.precioBase * item.cantidad,
      0
    );
  }
}
