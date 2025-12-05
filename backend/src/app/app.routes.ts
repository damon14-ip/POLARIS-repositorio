import { Routes } from '@angular/router';
import { Coffes } from './component/coffes/coffes';
import { Inicio } from './component/inicio/inicio';
import { Frappe } from './component/frappe/frappe';
import { Wafles } from './component/wafles/wafles';
import { Sandwich } from './component/sandwich/sandwich';
import { Jugos } from './component/jugos/jugos';
import { Ensalada } from './component/ensalada/ensalada';

export const routes: Routes = [
    {path:'',component:Inicio},
    { path: 'coffes', component: Coffes},
    { path: 'frappe', component: Frappe},
    { path: 'wafles', component: Wafles},
    { path: 'sandwich', component: Sandwich},
    { path: 'jugos', component: Jugos},
    { path: 'ensalada', component: Ensalada}
];
