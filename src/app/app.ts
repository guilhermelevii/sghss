import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, MatIcon, MatToolbar],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected readonly title = signal('sghss');
}


// É o componente raiz (principal) do aplicativo — o que controla toda a tela base.

// “controlador principal” da interface.