import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../../service/pedido-service';

@Component({
  selector: 'app-panel-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-empleado.html',
  styleUrl: './panel-empleado.css',
})
export class PanelEmpleado implements OnInit {

  pedidos: any[] = [];
  cargando = false;
  pedidoSeleccionado: any = null;
  modalVisible = false;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.cargarPedido();
  }

  cargarPedido() {
    this.cargando = true;

    this.pedidoService.getAll().subscribe({
      next: (res) => {
        this.pedidos = res;

        this.pedidos.forEach(p => {
          p.mostrarDetalle = false;
          
          this.pedidoService.getDetallePedido(p.idPedido).subscribe({
            next: (detalle) => {
              p.items = detalle.items; 
            },
            error: () => {
              console.error('Error al cargar detalle del pedido', p.idPedido);
              p.items = []; 
            }
          });
        });

        this.cargando = false;
      },
      error: () => {
        alert('Error al cargar pedidos');
        this.cargando = false;
      }
    });
  }

  verDetalle(pedido: any) {
    this.pedidoSeleccionado = pedido;
    this.modalVisible = true;
    
    if (!pedido.items || pedido.items.length === 0) {
      this.cargarDetalle(pedido);
    }
  }

  cerrarModal() {
    this.modalVisible = false;
    setTimeout(() => {
      this.pedidoSeleccionado = null;
    }, 300);
  }

  cargarDetalle(pedido: any) {
    this.pedidoService.getDetallePedido(pedido.idPedido).subscribe({
      next: (detalle) => {
        pedido.items = detalle.items;
        
        if (this.pedidoSeleccionado && this.pedidoSeleccionado.idPedido === pedido.idPedido) {
          this.pedidoSeleccionado.items = detalle.items;
        }
      },
      error: () => {
        console.error('Error al cargar detalle del pedido', pedido.idPedido);
        pedido.items = []; 
      }
    });
  }

  cambiarEstado(pedido: any, nuevoEstado: string) {
    this.pedidoService.cambioEstado(pedido.idPedido, nuevoEstado)
      .subscribe(() => {
        pedido.estado = nuevoEstado;
        
        if (this.pedidoSeleccionado && this.pedidoSeleccionado.idPedido === pedido.idPedido) {
          this.pedidoSeleccionado.estado = nuevoEstado;
        }
        
        if (nuevoEstado === 'LISTO' && this.modalVisible && this.pedidoSeleccionado.idPedido === pedido.idPedido) {
          setTimeout(() => {
            this.cerrarModal();
          }, 1500);
        }
      }, error => {
        console.error('Error al cambiar estado:', error);
        alert('Error al cambiar el estado del pedido');
      });
  }

  getEstadoIcon(estado: string): string {
    switch (estado?.toUpperCase()) {
      case 'ESPERA': return 'bi-clock';
      case 'PREPARACION': return 'bi-egg-fried';
      case 'LISTO': return 'bi-check-circle';
      default: return 'bi-question-circle';
    }
  }
  
  getEstadoClass(estado: string): string {
    switch (estado?.toUpperCase()) {
      case 'ESPERA': return 'estado-espera';
      case 'PREPARACION': return 'estado-preparacion';
      case 'LISTO': return 'estado-listo';
      default: return 'estado-default';
    }
  }
}