import { Routes } from '@angular/router';
import { Producto } from './component/producto/producto';
import { Carritos } from './component/carritos/carritos';
import { Categoria } from './component/categoria/categoria';

export const routes: Routes = [
<<<<<<< HEAD:frontend/src/app/app.routes.ts
  { path: '', component: Inicio },
  { path: 'coffes', component: Coffes },
  { path: 'frappe', component: Frappe },
  { path: 'wafles', component: Wafles },
  { path: 'sandwich', component: Sandwich },
  { path: 'jugos', component: Jugos },
  { path: 'ensalada', component: Ensalada }
=======
  { path: 'producto/:idCategoria', component: Producto },
  { path: 'categoria/getall', component: Categoria},
  { path: 'carrito', component: Carritos },
>>>>>>> origin/sprint1:src/app/app.routes.ts
];
