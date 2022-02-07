import { Component } from '@angular/core';

// décorateur qui indique à Angular que la classe TS en dessous est le code d'un composant
@Component({
  // selector --> indique la balise HTML à utiliser pour insérer le composant dans l'application
  selector: 'app-root',
  // templateUrl --> indique où se trouve le code HTML du composant
  templateUrl: './app.component.html',
  // styleUrls --> indique les styles du composant
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-projet';
  // un composant contient une classe TS qui servir à convertir ses données et sa logique
}
