import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


// Definindo um guard baseado em função (formato recomendado pelo Angular 15+).
export const AuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated()) return true;
  router.navigate(['/login']);
  return false;
};

// Controla acesso.
// Guards → controle de acesso de rotas


// Aqui você está importando:

// CanActivateFn → tipo que define a função de guard baseada em função (padrão moderno)

// Router → usado para redirecionar o usuário se ele NÃO estiver logado