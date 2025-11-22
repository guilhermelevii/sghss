import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLogged = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  isLogged$ = this._isLogged.asObservable();

  login(username: string, password: string) {
    // Simulação: aceitar qualquer usuário com senha '1234'
    if (password === '1234') {
      const fakeToken = btoa(`${username}:token`);
      localStorage.setItem('token', fakeToken);
      this._isLogged.next(true);
      return Promise.resolve(true);
    }
    return Promise.reject('Credenciais inválidas');
  }

  logout() {
    localStorage.removeItem('token');
    this._isLogged.next(false);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
