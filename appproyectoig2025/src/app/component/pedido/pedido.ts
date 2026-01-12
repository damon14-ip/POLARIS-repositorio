import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from '../../service/carrito-service';
import { PedidoService } from '../../service/pedido-service';
import { PedidoItem } from '../../service/pedido-item';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pedido.html',
  styleUrls: ['./pedido.css'],
})
export class Pedido {

  formPedido!: FormGroup;
  carrito: any[] = [];
  total = 0;

  mesas = [
    { numero: 1, ocupada: false },
    { numero: 2, ocupada: true },
    { numero: 3, ocupada: false },
    { numero: 4, ocupada: false },
  ];

  get nombreClienteFb() { return this.formPedido.controls['nombreCliente']; }
  get tipoPedidoFb() { return this.formPedido.controls['tipoPedido']; }
  get metodoPagoFb() { return this.formPedido.controls['metodoPago']; }
  get mesaFb() { return this.formPedido.controls['mesa']; }
  get totalPagarFb() { return this.formPedido.controls['totalPagar']; }

  constructor(
    private fb: FormBuilder,
    private carritoService: CarritoService,
    private pedidoService: PedidoService,
    private pedidoItemService: PedidoItem,
    private router: Router
  ) {
    this.formPedido = this.fb.group({
      nombreCliente: ['', Validators.required],
      tipoPedido: ['', Validators.required],
      metodoPago: ['', Validators.required],
      mesa: [null],
      totalPagar: [this.total]
    });
  }

  ngOnInit() {
    this.carrito = this.carritoService.obtenerItems();
    this.total = this.carritoService.total();
    this.formPedido.patchValue({ totalPagar: this.total });
  }

  insert() {
    if (this.formPedido.value.tipoPedido === 'MESA' && !this.formPedido.value.mesa) {
      alert('Selecciona una mesa');
      return;
    }
    if (this.formPedido.invalid) {
      alert('Completa todos los datos');
      return;
    }

    const formData = new FormData();
    formData.append('nombreCliente', this.nombreClienteFb.value);
    formData.append('tipoPedido', this.tipoPedidoFb.value);
    formData.append('metodoPago', this.metodoPagoFb.value);
    if (this.mesaFb.value) formData.append('mesa', this.mesaFb.value);
    formData.append('totalPagar', this.totalPagarFb.value.toString());

    this.pedidoService.insert(formData).subscribe({
      next: (res: any) => {
        const idPedido = res.idPedido;
        localStorage.setItem('idPedido', idPedido);

        
        this.carrito.forEach(item => {
          this.insertPedidoItem(idPedido, item);
        });

        this.carritoService.limpiar();
        this.formPedido.reset();
        this.total = 0;

        this.router.navigate(['/estado-pedido']);
      },
      error: (err) => {
        console.error('Error al insertar pedido', err);
        alert('Error al enviar el pedido');
      }
    });
  }

  insertPedidoItem(idPedido: string, item: any) {
    const formData = new FormData();
    formData.append('dto.pedidoItem.idProducto', item.idProducto);
    formData.append('dto.pedidoItem.cantidad', item.cantidad.toString());
    formData.append('dto.pedidoItem.precioUnitarioFinal', item.precioBase.toString());

    item.salsas?.forEach((id: string) => formData.append('dto.pedidoItem.salsas', id));
    item.toppings?.forEach((id: string) => formData.append('dto.pedidoItem.toppings', id));

    this.pedidoItemService.insert(idPedido, formData).subscribe({
      next: () => console.log('Item agregado'),
      error: (err) => console.error('Error al agregar item', err)
    });
  }
}
