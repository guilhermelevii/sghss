import { ApplicationConfig, provideZoneChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),

    // ✔️ suas rotas existentes
    provideRouter(routes),

    // ✔️ necessário para Angular Material funcionar
    importProvidersFrom(BrowserAnimationsModule),

    // ✔️ necessário para Datepicker Material com datas nativas
    importProvidersFrom(MatNativeDateModule),
  ]
};



// É o arquivo de configuração global do Angular (substitui o app.module.ts nas versões mais recentes). Ele define:

// Providers - Serviços globais

// Configurações - Comportamento da aplicação

// Dependências - O que está disponível em toda a app


// provideZoneChangeDetection() → Melhora performance

// provideRouter(routes) → Sistema de rotas

// provideBrowserGlobalErrorListeners() → Opcional (pode remover)

// “painel de configuração do app”.