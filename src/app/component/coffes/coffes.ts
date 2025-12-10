import { Component } from '@angular/core';
import { Producto } from '../../service/producto';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Carrito } from '../../service/carrito';

@Component({
  selector: 'app-coffes',
  standalone:true,
  imports: [RouterModule,CommonModule],
  templateUrl: './coffes.html',
  styleUrl: './coffes.css',
})
export class Coffes {
  
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
      afogato: 'img/cafe/cafe-afogato.png',
      americano: 'img/cafe/cafe-americano.png',
      bombon: 'img/cafe/cafe-bombon.png',
      capuccino: 'img/cafe/cafe-capuccino.png',
      expresso: 'img/cafe/cafe-expresso.png',
      mocacino: 'img/cafe/cafe-mocacino.png'
    };
    return imagen[nombre] || 'default.png';
  }

  agregarAlCarrito(producto:any){
    this.carrito.agregar(producto);
  }
}
