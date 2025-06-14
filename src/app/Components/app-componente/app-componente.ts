// @ts-ignore

import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NomeComponente} from '../nome-componente/nome-componente';

@Component({
  selector: 'app-app-componente',
  imports: [RouterOutlet, NomeComponente],
  standalone: true,
  templateUrl: './app-componente.html',
  styleUrl: './app-componente.css'
})
export class AppComponente {
  tiltle = 'AgendaWebstorm'
}
