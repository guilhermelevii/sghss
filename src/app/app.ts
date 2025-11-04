import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected readonly title = signal('sghss');
}


// É o componente raiz (principal) do aplicativo — o que controla toda a tela base.

// “controlador principal” da interface.