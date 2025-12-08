import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/pacient.model.ts';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './patient-list.html'
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientService.patients$.subscribe(list => this.patients = list);
  }

  add() {
    this.router.navigate(['/patients/new']);
  }

  edit(id: string) {
    this.router.navigate(['/patients/edit', id]);
  }

  remove(id: string) {
    if (confirm('Tem certeza?')) {
      this.patientService.delete(id).subscribe();
    }
  }
}
