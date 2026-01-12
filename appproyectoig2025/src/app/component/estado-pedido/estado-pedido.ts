import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../service/pedido-service';

@Component({
  selector: 'app-estado-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estado-pedido.html',
  styleUrl: './estado-pedido.css',
})
export class EstadoPedido implements OnInit, OnDestroy {

  estado: string = '';
  idPedido!: string;
  intervalId: any;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    const id = localStorage.getItem('idPedido');

    if (!id) {
      console.error('No hay idPedido en localStorage');
      return;
    }

    this.idPedido = id;
    this.obtenerEstado();

    // 🔄 ACTUALIZACIÓN AUTOMÁTICA
    this.intervalId = setInterval(() => {
      this.obtenerEstado();
    }, 5000);
  }

  obtenerEstado() {
    this.pedidoService.getEstadoPedido(this.idPedido).subscribe({
      next: (estado) => this.estado = estado,
      error: (err) => console.error('Error al obtener estado', err)
    });
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
