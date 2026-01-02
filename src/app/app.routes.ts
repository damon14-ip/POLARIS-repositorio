import { Routes } from '@angular/router';
import { Producto } from './component/producto/producto';
import { Carritos } from './component/carritos/carritos';
import { Categoria } from './component/categoria/categoria';
import { Pedido } from './component/pedido/pedido';

export const routes: Routes = [
  { path: '', redirectTo: 'categoria', pathMatch: 'full' },
  { path: 'producto/:idCategoria', component: Producto },
  { path: 'categoria', component: Categoria},
  { path: 'carrito', component: Carritos },
  { path: 'pedido',component:Pedido}
];
