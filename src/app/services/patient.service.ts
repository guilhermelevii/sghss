import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Patient } from '../models/pacient.model.ts';

@Injectable({ providedIn: 'root' })
export class PatientService {
  private patients: Patient[] = [
    { id: '1', name: 'João Silva', cpf: '00000000000', birthdate: '1980-01-01', phone: '99999-0000' },
    { id: '2', name: 'Maria Souza', cpf: '11111111111', birthdate: '1990-05-10', phone: '98888-1111' }
  ];

  list() { return of(this.patients); }
  get(id: string) { return of(this.patients.find(p => p.id === id)); }
  create(p: Omit<Patient, 'id'>) {
    const newP: Patient = { id: String(Date.now()), ...p };
    this.patients.push(newP);
    return of(newP);
  }
  update(id: string, data: Partial<Patient>) {
    const idx = this.patients.findIndex(p => p.id === id);
    if (idx >= 0) this.patients[idx] = { ...this.patients[idx], ...data };
    return of(this.patients[idx]);
  }
  delete(id: string) {
    this.patients = this.patients.filter(p => p.id !== id);
    return of(true);
  }
}
