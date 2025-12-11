import { Component } from '@angular/core';
import { Carrito } from '../../service/carrito';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pedido',
  imports: [CommonModule,RouterModule],
  templateUrl: './pedido.html',
  styleUrl: './pedido.css',
})
export class Pedido {
   carritos:any[] = [];

  constructor(private carrito: Carrito) {
    this.carritos = this.carrito.obtenerCarrito();
  }
}
