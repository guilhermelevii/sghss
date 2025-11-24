import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Components
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [// Angular Core
  CommonModule,                         // *ngIf, *ngFor, diretivas comuns
  ReactiveFormsModule,                  // Formulários reativos
  
  // Angular Material
  MatSlideToggleModule,                 // Switch/alternador estilizado
  MatCardModule,                        // Container para conteúdo
  MatFormFieldModule,                   // Campos de formulário com labels
  MatInputModule,                       // Inputs estilizados
  MatButtonModule,                      // Botões Material
  MatIconModule,                        // Ícones
  MatCheckboxModule,                    // Checkboxes
  MatProgressSpinnerModule,             // Indicadores de loading
  
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar, // Para usar no método onSubmit
    private auth: AuthService, // AuthService injetado
    private router:Router // Router injetado
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  async onSubmit() {
    if (!this.loginForm.valid) return;

    this.loading = true;
    const { email, password } = this.loginForm.value;

    try {
      // 👇 LOGIN REAL DE VERDADE
      await this.auth.login(email, password);

      this.snackBar.open('Login realizado com sucesso!', 'Fechar', {
        duration: 3000
      });

      // 👇 REDIRECIONA PARA O DASHBOARD
      this.router.navigate(['/dashboard']);

    } catch (err) {
      this.snackBar.open('Usuário ou senha incorretos', 'Fechar', {
        duration: 3000
      });
    }

    this.loading = false;
  }

  clicou() {
  console.log("Olá");
}
  
}