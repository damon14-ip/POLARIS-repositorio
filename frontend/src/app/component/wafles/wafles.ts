import { Component } from '@angular/core';
import { Producto } from '../../service/producto';
import { Carrito } from '../../service/carrito';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-wafles',
  imports: [CommonModule,RouterModule],
  templateUrl: './wafles.html',
  styleUrl: './wafles.css',
})
export class Wafles {
   listProducto: any[]=[];
    
    constructor(
      private producto:Producto,
      private carrito:Carrito
    ){}
    
    ngOnInit():void{
      this.producto.getAll().subscribe({
        next: (response: any)=>{
          this.listProducto=response
        },
        error:(error:any)=>{
          console.log(error);
        }
      })
    }
  
    getImagen(nombre: string): string {
      const imagen: any = {
        especial: 'img/wafle/wafle-especial.jpg',
        sencillo: 'img/wafle/wafle-sencillo.jpg',
        bombon: 'img/wafle/wafle-supremo.jpg',
        wafle: 'img/wafle/wafle.jpeg'
      };
      return imagen[nombre] || 'default.png';
    }
  
    agregarAlCarrito(producto:any){
      this.carrito.agregar(producto);
    }
}
