import { Injectable } from '@angular/core'; // `Injectable` — necessário para permitir que o serviço seja injetado em outras partes do app.
import { BehaviorSubject } from 'rxjs'; // `BehaviorSubject` — excelente escolha para monitorar o estado de login.Com ele, qualquer componente pode se inscrever e reagir automaticamente quando o usuário loga/desloga.

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

// Serviços são classes usadas para lidar com API, autenticação, funções reutilizáveis, etc.

// Aqui você cria um estado reativo que representa “usuário logado ou não”.

// - `BehaviorSubject` começa com um valor inicial
// - `!!localStorage.getItem('token')` converte token → booleano
// - `isLogged$` é a versão OBSERVÁVEL (que outros componentes podem escutar)