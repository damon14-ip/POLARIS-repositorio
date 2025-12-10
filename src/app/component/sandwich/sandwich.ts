import { Component } from '@angular/core';
import { Producto } from '../../service/producto';
import { Carrito } from '../../service/carrito';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sandwich',
  imports: [CommonModule,RouterModule],
  templateUrl: './sandwich.html',
  styleUrl: './sandwich.css',
})
export class Sandwich {
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
      clasico: 'img/sandwich/sandwich-clasico.png',
      sencillo: 'img/sandwich/sandwich-especial.png',
    };
    return imagen[nombre] || 'default.png';
  }
    
  agregarAlCarrito(producto:any){
    this.carrito.agregar(producto);
  }
}
