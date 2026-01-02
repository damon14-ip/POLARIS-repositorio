import { Component } from '@angular/core';
import { PedidoService } from '../../service/pedido-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estado-pedido',
  imports: [CommonModule],
  templateUrl: './estado-pedido.html',
  styleUrl: './estado-pedido.css',
})
export class EstadoPedido {
  estado: string='';
  constructor(
    private pedidoService: PedidoService
  ) {}

  ngOnInit() {
   this.getAllEstado();
  }
  getAllEstado() {
    this.pedidoService.getEstado().subscribe({
      next: (response: any) => {
        this.estado= response;
      },
      error: err => console.error('No se encontro el estado', err),
    });
  }
}
