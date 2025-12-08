import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './lista-pacientes.html',
  styleUrls: ['./lista-pacientes.css']
})
export class ListaPacientesComponent implements OnInit {
  
  pacientes: any[] = [];

  ngOnInit(): void {
    this.pacientes = JSON.parse(localStorage.getItem('pacientes') || '[]');
  }
}
