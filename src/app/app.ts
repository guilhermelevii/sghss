// GUILHERME HENRIQUE LEVI DOMINGOS COSTA RU: 4628902

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = signal('SGHSS');
}



// É o componente raiz (principal) do aplicativo — o que controla toda a tela base.

// “controlador principal” da interface.