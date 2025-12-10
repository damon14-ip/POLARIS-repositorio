import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../service/carrito-service';

@Component({
  selector: 'app-carritos',
  imports: [CommonModule],
  templateUrl: './carritos.html',
  styleUrl: './carritos.css',
})
export class Carritos {
   constructor(public carrito: CarritoService) {}
}
