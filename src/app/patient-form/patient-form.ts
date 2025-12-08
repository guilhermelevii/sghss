import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/pacient.model.ts';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './patient-form.html',
  styleUrls: ['./patient-form.css']
})
export class PatientFormComponent implements OnInit {

  form: FormGroup;
  editingId?: string;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // 💥 Aqui o fb está inicializado corretamente
    this.form = this.fb.group({
      name: ['', Validators.required],
      cpf: [''],
      birthdate: [''],
      phone: [''],
      notes: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editingId = id;

      this.patientService.get(id).subscribe(p => {
        if (p) {
          this.form.patchValue(p);
        }
      });
    }
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const data = this.form.value as Omit<Patient, 'id'>;

    if (this.editingId) {
      this.patientService.update(this.editingId, data)
        .subscribe(() => this.router.navigate(['/patients']));
    } else {
      this.patientService.create(data)
        .subscribe(() => this.router.navigate(['/patients']));
    }
  }

  cancel() {
    this.router.navigate(['/patients']);
  }
}
