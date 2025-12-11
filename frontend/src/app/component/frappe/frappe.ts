import { Component } from '@angular/core';
import { Producto } from '../../service/producto';
import { Carrito } from '../../service/carrito';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-frappe',
  imports: [CommonModule,RouterModule],
  templateUrl: './frappe.html',
  styleUrl: './frappe.css',
})
export class Frappe {
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
      frappuchino: 'img/frappe/frappe-frappuchino.png',
      fresa: 'img/frappe/frappe-fresa.png',
      vainilla: 'img/frappe/frappe-vainilla.png',
      arandano: 'img/frappe/frappe-arandano.png',
      caramelo: 'img/frappe/frappe-caramelo.png',
      durazno: 'img/frappe/frappe-durazno.png',
      mango:'img/frappe/frappe-mango.png',
      maracuya:'img/frappe/frappe-mango.png',
      moca:'img/frappe/frappe-moca.png',
      oreo:'img/frappe/frappe-oreo.png'
    };
    return imagen[nombre] || 'default.png';
  }
  
  agregarAlCarrito(producto:any){
    this.carrito.agregar(producto);
  }
}
