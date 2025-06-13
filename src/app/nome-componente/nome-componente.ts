import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-componente',
  imports: [],
  standalone: true,
  templateUrl: './nome-componente.html',
  styleUrl: './nome-componente.css'
})
export class NomeComponente {
  nome = "Leticia Costa";
  Contato = "45465465615";
  Email = "Leticia@gmail.com";
  Parentesco = "Irmã";
}
