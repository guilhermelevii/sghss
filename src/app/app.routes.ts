import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, //  redireciona pra login
    { path: 'login', component: LoginComponent },
];

// Criando as rotas e exportando