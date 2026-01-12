import { ChangeDetectorRef, Component } from '@angular/core';
import { CategoriaService } from '../../service/categoria-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  imports: [CommonModule],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css',
})
export class Categoria {
  listCategoria: any[] = [];

  constructor(
    private router:Router,
    private categoryService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: (response: any) => {
        this.listCategoria = response;
        /*this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();*/
        console.log(response)
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

 
  getIcon(nombre: string): string {
    const icons: any = {
      Café: 'fa-coffee',
      frappe: 'fa-glass-whiskey',
      postres: 'fa-cookie-bite',
      Sandwiches: 'fa-hamburger',
      Bebidas: 'fa-glass-martini',
      ensalada: 'fa-apple-alt',
    };
    return icons[nombre] || 'fa-circle';
  }

  seeProduct(idCategoria:string){
    this.router.navigate(['/producto',idCategoria])
  }
}
