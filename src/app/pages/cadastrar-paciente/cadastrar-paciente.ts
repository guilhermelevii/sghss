import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cadastrar-paciente',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './cadastrar-paciente.html',
  styleUrls: ['./cadastrar-paciente.css']
})
export class CadastrarPacienteComponent {
  // A propriedade 'form' é declarada. É bom usar a tipagem FormGroup.
  form: FormGroup; 

  // O FormBuilder (fb) é injetado.
  constructor(private fb: FormBuilder) {
    // A propriedade 'form' é inicializada AQUI, após o 'fb' estar disponível.
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required]
      // A vírgula final foi removida por boas práticas, embora não cause erro aqui.
    });
  }

 salvar() {
  if (this.form.valid) {
    const pacientes = JSON.parse(localStorage.getItem('pacientes') || '[]');

    pacientes.push(this.form.value);

    localStorage.setItem('pacientes', JSON.stringify(pacientes));

    alert('Paciente cadastrado com sucesso!');
    this.form.reset();
  }
  }
}