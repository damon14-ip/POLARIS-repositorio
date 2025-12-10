import { Routes } from '@angular/router';
import { Producto } from './component/producto/producto';
import { Carritos } from './component/carritos/carritos';
import { Categoria } from './component/categoria/categoria';

export const routes: Routes = [
  { path: 'producto/:idCategoria', component: Producto },
  { path: 'categoria/getall', component: Categoria},
  { path: 'carrito', component: Carritos },
];
