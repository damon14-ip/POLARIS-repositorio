import { Routes } from '@angular/router';
import { Producto } from './component/producto/producto';
import { Carritos } from './component/carritos/carritos';
import { Categoria } from './component/categoria/categoria';
import { Pedido } from './component/pedido/pedido';

export const routes: Routes = [
frontend/src/app/app.routes.ts
frontend/src/app/app.routes.ts
  { path: '', component: Inicio },
  { path: 'coffes', component: Coffes },
  { path: 'frappe', component: Frappe },
  { path: 'wafles', component: Wafles },
  { path: 'sandwich', component: Sandwich },
  { path: 'jugos', component: Jugos },
  { path: 'ensalada', component: Ensalada }
  { path: '', redirectTo: 'categoria', pathMatch: 'full' },
src/app/app.routes.ts
  { path: 'producto/:idCategoria', component: Producto },
  { path: 'categoria', component: Categoria},
  { path: 'carrito', component: Carritos },
frontend/src/app/app.routes.ts
src/app/app.routes.ts
  { path: 'pedido',component:Pedido}
src/app/app.routes.ts
];
