import { Routes } from '@angular/router';
import { Producto } from './component/producto/producto';
import { Carritos } from './component/carritos/carritos';
import { Categoria } from './component/categoria/categoria';
import { Pedido } from './component/pedido/pedido';
import { PanelEmpleado } from './component/panel-empleado/panel-empleado';
import { Login } from './component/login/login';
import { Estadistica } from './component/estadistica/estadistica';

export const routes: Routes = [
  { path: '', redirectTo: 'categoria', pathMatch: 'full' },

  { path: 'producto/:idCategoria', component: Producto },
  { path: 'categoria', component: Categoria },
  { path: 'carrito', component: Carritos },
  { path: 'pedido', component: Pedido },
  { path: 'empleado', component: PanelEmpleado },
  { path: 'login', component: Login },
  { path: 'estadistica', component: Estadistica },

  {
    path: 'estado-pedido',
    loadComponent: () =>
      import('./component/estado-pedido/estado-pedido')
        .then(m => m.EstadoPedido)
  }
];
