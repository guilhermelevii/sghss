import { Injectable } from '@angular/core';
import { Patient } from '../models/pacient.model.ts';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PatientService {
  private patientsSubject = new BehaviorSubject<Patient[]>([
    { id: '1', name: 'João Silva', cpf: '00000000000', birthdate: '1980-01-01', phone: '99999-0000', notes: '' }
  ]);

  patients$ = this.patientsSubject.asObservable();

  list() {
    return this.patients$;
  }

  get(id: string) {
    const found = this.patientsSubject.getValue().find(p => p.id === id);
    return of(found);
  }

  create(data: Omit<Patient, 'id'>) {
    const newP: Patient = { id: Date.now().toString(), ...data };
    const arr = [newP, ...this.patientsSubject.getValue()];
    this.patientsSubject.next(arr);
    return of(newP);
  }

  update(id: string, data: Partial<Patient>) {
    const arr = this.patientsSubject.getValue().map(p =>
      p.id === id ? { ...p, ...data } : p
    );
    this.patientsSubject.next(arr);
    return this.get(id);
  }

  delete(id: string) {
    const arr = this.patientsSubject.getValue().filter(p => p.id !== id);
    this.patientsSubject.next(arr);
    return of(true);
  }
}





// .find() retorna: o paciente ou undefined
// create(): Omit<Patient, 'id'> → cria um paciente sem id (id é gerado internamente)
// update(): Partial<Patient> → atualiza apenas os campos fornecidos    