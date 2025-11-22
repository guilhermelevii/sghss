// o “GPS” do app — diz qual caminho leva a qual tela.

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, //  redireciona pra login
    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent}
    
];

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
