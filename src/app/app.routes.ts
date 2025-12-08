// o “GPS” do app — diz qual caminho leva a qual tela.

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { CadastrarPacienteComponent } from './pages/cadastrar-paciente/cadastrar-paciente';
import { ListaPacientesComponent } from './pages/lista-pacientes/lista-pacientes';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Tela de Login
  { path: 'login', component: LoginComponent },

  // Dashboard
  { path: 'dashboard', component: DashboardComponent },

  // Cadastro de Paciente
  { path: 'cadastrar-paciente', component: CadastrarPacienteComponent },

  { path: 'lista-pacientes', component: ListaPacientesComponent },

  // Rota coringa para qualquer URL inexistente
  { path: '**', redirectTo: 'login' }
];



// Rotas → define navegação entre páginas

// Criando as rotas e exportando

// 👇 Explicação sobre o pathMatch:
//
// O pathMatch diz ao Angular como comparar o caminho da URL com o 'path' definido.
//
// 👉 Quando usamos:
// { path: '', redirectTo: 'login', pathMatch: 'full' }
//
// Significa que o redirecionamento só vai acontecer se o caminho da URL for
// **exatamente vazio** — ou seja, quando o usuário acessar apenas '/'
// (ex: http://localhost:4200/). 
// Nesse caso, ele será redirecionado para '/login'.
//
// 🧠 Se colocássemos "pathMatch: 'prefix'" em vez de "full":
// - O Angular verificaria apenas o "começo" da URL.
// - Como toda URL começa com '', isso faria com que *qualquer rota*
//   (como '/home', '/cadastro', etc.) também redirecionasse para '/login'.
// - Isso criaria um loop de redirecionamentos e o app não funcionaria direito.
//
// ✅ Por isso usamos "pathMatch: 'full'" — para redirecionar apenas
// quando o caminho estiver completamente vazio (apenas '/').
