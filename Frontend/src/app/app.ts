import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './service/loader-service';
import { Loader } from './component/loader/loader';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterModule,Loader,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loading$:Observable<boolean>
  
  constructor(
    private loaderService:LoaderService
  ){
    this.loading$=this.loaderService.loading$;
  }
  
 
  protected readonly title = signal('appproyectods2025');

}
