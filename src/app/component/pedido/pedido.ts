import { Component } from '@angular/core';
import { Carrito } from '../../service/carrito';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pedido',
  imports: [CommonModule,RouterModule],
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarritoService } from '../../service/carrito-service';
import { PedidoService } from '../../service/pedido-service';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pedido.html',
  styleUrl: './pedido.css',
})
export class Pedido {
   carritos:any[] = [];

  constructor(private carrito: Carrito) {
    this.carritos = this.carrito.obtenerCarrito();

  formPedido!: FormGroup;
  carrito: any[] = [];
  total = 0;

  mesas = [
    { numero: 1, ocupada: false },
    { numero: 2, ocupada: true },
    { numero: 3, ocupada: false },
    { numero: 4, ocupada: false },
  ];

  constructor(
    private fb: FormBuilder,
    private carritoService: CarritoService,
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerItems();
    this.total = this.carritoService.total();

    this.formPedido = this.fb.group({
      nombreCliente: ['', Validators.required],
      tipoPedido: ['', Validators.required],
      metodoPago: ['', Validators.required],
      mesa: [null],
      totalPagar: [this.total]
    });
  }

  confirmarPedido() {
    if (this.formPedido.value.tipoPedido === 'MESA' &&!this.formPedido.value.mesa) {
      alert('Selecciona una mesa');
      return;
    }

    if (this.formPedido.invalid) {
      alert('Completa todos los datos');
      return;
    }

    const pedido = {
      ...this.formPedido.value,
      detalle: this.carrito
    };

    console.log('🧾 PEDIDO FINAL 👉', pedido);

    this.pedidoService.insert(pedido).subscribe(() => {
      alert('Pedido registrado correctamente');
      this.carritoService.limpiar();
      this.formPedido.reset();
    });
  }
}
