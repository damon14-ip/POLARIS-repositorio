import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductoService } from '../../service/producto-service';
import { CarritoService } from '../../service/carrito-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [CommonModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  listProducto: any[] = [];
  idCategoria!:number;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private route:ActivatedRoute,
    private productoService:ProductoService,
    private carrito:CarritoService
  ) {}

  ngOnInit(): void {
    this.idCategoria=Number(this.route.snapshot.paramMap.get('idCategoria'));
    
    this.productoService.getByCategoria(this.idCategoria).subscribe(res => {
      console.log(res)
      this.listProducto = res;

      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    });
  }

  agregar(p: any) {
    this.carrito.agregar({
      idProducto: p.idProducto,
      nombre: p.nombre,
      precio: p.precioBase
    });
  }

  getImagen(id: number): string {
    const img: any = {
      1: 'img/cafe/cafe-afogato.png',
      2: 'img/cafe/cafe-americano.png',
      3: 'img/cafe/cafe-bombon.png',
      4: 'img/cafe/cafe-cappucino.png',
      5: 'img/cafe/cafe-expresso.png',
      6: 'img/cafe/cafe-mocaccino.png'
    };
    return img[id] || 'img/default.png';
  }


}
