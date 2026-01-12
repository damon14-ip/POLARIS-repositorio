import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../service/login-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule   // 👈 RouterLink eliminado
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  formUser: FormGroup;

  get nombreFb() { return this.formUser.controls['nombre']; }
  get passwordFb() { return this.formUser.controls['password']; }

  constructor(
    private formBuilder: FormBuilder,
    private userService: LoginService,
    private router: Router
  ) {
    this.formUser = this.formBuilder.group({
      nombre: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  public login(): void {
    const formData = new FormData();

    // nombres que espera Spring
    formData.append('dto.dtoUser.nombre', this.nombreFb.value);
    formData.append('dto.dtoUser.password', this.passwordFb.value);

    this.userService.login(formData).subscribe({
      next: (response: any) => {
        const token = response.token;

        if (!token) {
          console.error('❌ Token no recibido');
          return;
        }

        this.userService.setToken(token);
        console.log('✅ TOKEN GUARDADO:', token);

        // ✅ panel del empleado
        this.router.navigate(['/empleado']);
      },
      error: () => {
        alert('Credenciales incorrectas');
      }
    });
  }
}
