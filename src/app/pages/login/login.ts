import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  // A função 'login()' foi movida para dentro da classe LoginComponent
  login() {
    if (this.form.valid) {
      // Simulação de autenticação bem-sucedida, redirecionando para o dashboard
      this.router.navigate(['/dashboard']);
    } else {
      // Opcional: Adicionar lógica para mostrar que o formulário é inválido (ex: marcar campos como tocados)
      this.form.markAllAsTouched();
      alert('Por favor, preencha o e-mail e a senha corretamente.');
    }
  }
}