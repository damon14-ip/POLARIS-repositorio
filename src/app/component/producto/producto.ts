import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../../service/producto-service';
import { CarritoService } from '../../service/carrito-service';
import { AcompanamientoService } from '../../service/acompanamiento-service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  listProducto: any[] = [];
  listTopping: any[]=[];
  listSalsas:any[]=[];
  idCategoria!: string;
  selectedSalsas: { [idProducto: string]: string[] } = {};
  selectedToppings: { [idProducto: string]: string[] } = {};



  constructor(
    private productoService: ProductoService,
    private carrito: CarritoService,
    private acompanamientoService:AcompanamientoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllSalsas();
    this.getAllTopping();
    this.route.paramMap.subscribe(params => {
      const id = params.get('idCategoria');
      if (id) {
        this.idCategoria = id;
        this.getAll(this.idCategoria);
      } else {
        console.error('No se recibió id de categoría');
      }
    });
}


  getAll(idCategoria: string) {
    this.productoService.getAll(idCategoria).subscribe({
      next: (response: any[]) => {
        this.listProducto = response;
      },
      error: err => console.error('No se encontraron datos', err),
    });
  }

  getAllTopping() {
    this.acompanamientoService.getAllTopping().subscribe({
      next: (response: any[]) => {
        this.listTopping= response;
      },
      error: err => console.error('No se encontraron datos de toping', err),
    });
  }

  getAllSalsas() {
    this.acompanamientoService.getAllSalsas().subscribe({
      next: (response: any[]) => {
        this.listSalsas= response;
      },
      error: err => console.error('No se encontraron datos de toping', err),
    });
  }
  
  agregar(p: any) {
    this.carrito.agregar({
      idProducto: p.idProducto,
      nombre: p.nombre,
      precioBase: p.precioBase,
      imagen: this.getImagenProducto(p.idProducto),
      salsas: this.selectedSalsas[p.idProducto] || [],
      toppings: this.selectedToppings[p.idProducto] || []
    });

    alert(`${p.nombre} agregado al carrito!`);
  }


  getImagenProducto(idProducto: string): string {
    const imagenes: { [key: string]: string } = {
      // CAFÉS
      '46d39903-e596-11f0-9ea4-601895595474': 'img/cafe/cafe-expresso.png',
      '46d428cc-e596-11f0-9ea4-601895595474': 'img/cafe/mocaccino.png',
      '46d434fd-e596-11f0-9ea4-601895595474': 'img/cafe/afogato.png',
      '46d43989-e596-11f0-9ea4-601895595474': 'img/cafe/cafe-bombon.png',

      // FRAPPÉS
      '46d545bc-e596-11f0-9ea4-601895595474': 'img/frappe/frappuchino.png',
      '46d56a73-e596-11f0-9ea4-601895595474': 'img/frappe/frappe-vainilla.png',
      '46d5704b-e596-11f0-9ea4-601895595474': 'img/frappe/frappe-caramelo.png',
      '46d5779c-e596-11f0-9ea4-601895595474': 'img/frappe/frappe-fresa.png',

      // WAFFLES
      '46d6807b-e596-11f0-9ea4-601895595474': 'img/waffles/waffle.png',
      '46d69a61-e596-11f0-9ea4-601895595474': 'img/waffles/waffle-sencillo.png',
      '46d69ec0-e596-11f0-9ea4-601895595474': 'img/waffles/waffle-especial.png',
      '46d6a0de-e596-11f0-9ea4-601895595474': 'img/waffles/waffle-supremo.png',

      // SANDWICHES
      '46d6a2ef-e596-11f0-9ea4-601895595474': 'img/sandwich/sandwich-clasico.png',
      '46d6a527-e596-11f0-9ea4-601895595474': 'img/sandwich/super-sandwich.png',

      // JUGOS Y ENSALADAS
      '46d71b6d-e596-11f0-9ea4-601895595474': 'img/jugos/jugo-fresa.png',
      '46d73298-e596-11f0-9ea4-601895595474': 'img/jugos/jugo-mango.png',
      '46d735bd-e596-11f0-9ea4-601895595474': 'img/jugos/jugo-platano.png',
      '46d7379d-e596-11f0-9ea4-601895595474': 'img/jugos/jugo-especial.png',
      '46d739a1-e596-11f0-9ea4-601895595474': 'img/jugos/jugo-papaya.png',
      '46d73b59-e596-11f0-9ea4-601895595474': 'img/ensalada/ensalada-frutimix.png',
      '46d73cb5-e596-11f0-9ea4-601895595474': 'img/ensalada/ensalada-gourmet.png',
    };

    return imagenes[idProducto] || 'img/default.png';
  }

  getLimites(p: any) {
    switch (p.nombre) {
      case 'Waffle':
        return { salsas: 1, toppings: 1 };
      case 'Waffle Sencillo':
        return { salsas: 1, toppings: 2 };
      case 'Waffle Especial':
        return { salsas: 2, toppings: 3 };
      case 'Waffle Supremo':
        return { salsas: 3, toppings: 4 };
      default:
        return { salsas: 0, toppings: 0 };
    }
  }
  toggleSalsa(idProducto: string, id: string, max: number) {
    if (!this.selectedSalsas[idProducto]) {
      this.selectedSalsas[idProducto] = [];
    }

    const lista = this.selectedSalsas[idProducto];

    if (lista.includes(id)) {
      this.selectedSalsas[idProducto] = lista.filter(x => x !== id);
    } else {
      if (lista.length < max) {
        lista.push(id);
      } else {
        alert(`Solo puedes elegir ${max} salsas`);
      }
    }
  }


toggleTopping(idProducto: string, id: string, max: number) {
  if (!this.selectedToppings[idProducto]) {
    this.selectedToppings[idProducto] = [];
  }

  const lista = this.selectedToppings[idProducto];

  if (lista.includes(id)) {
    this.selectedToppings[idProducto] = lista.filter(x => x !== id);
  } else {
    if (lista.length < max) {
      lista.push(id);
    } else {
      alert(`Solo puedes elegir ${max} toppings`);
    }
  }
}



}
