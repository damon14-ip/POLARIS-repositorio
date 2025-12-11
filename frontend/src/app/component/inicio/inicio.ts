import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Categoria } from '../../service/categoria';
@Component({
  selector: 'app-inicio',
  standalone:true,
  imports: [RouterModule,CommonModule
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  listCategoria: any[]=[];

  constructor(
    private categoria:Categoria
  ){}

  ngOnInit():void{
    this.categoria.getAll().subscribe({
      next: (response: any)=>{
        this.listCategoria=response
      },
      error:(error:any)=>{
        console.log(error);
        
      }
    })
  }

  getIcon(nombre: string): string {
    const icons: any = {
      coffes: 'fa-coffee',
      frappe: 'fa-glass-whiskey',
      wafles: 'fa-cookie-bite',
      sandwich: 'fa-hamburger',
      jugos: 'fa-glass-martini',
      ensalada: 'fa-apple-alt'
    };
    return icons[nombre] || 'fa-circle';
  }

  getRuta(nombre: string): string {
    switch (nombre.toLowerCase()) {
      case 'coffes':
        return '/coffes';
      case 'wafles':
        return '/wafles';
      case 'frappe':
        return '/frappe';
      case 'ensalada':
        return '/ensalada';
      case 'sandwich':
        return '/sandwich';
      case'jugos':
        return '/jugos'
      default:
        return '/';
    }
  }





}
