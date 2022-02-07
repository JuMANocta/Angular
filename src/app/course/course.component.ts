import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // avec des @Inputs, on indique que, le HTML du parent, on va binder la propriété contenu de <app-course>. cela permettra à la classe CourseCompoent de recevoir les informations
  @Input() contenu !: Course; // infos parent -> enfant
  @Output() newNb = new EventEmitter<number>()// info enfant -> parent
  // newNB est un évènement que l'enfant va déclencher pour forcer l'écoute du parent
  lastNb !: number; //va servir à calculer le nombre que l'on émet vers le parent
  constructor() { }

  ngOnInit(): void {
    this.lastNb = this.contenu.nb_etud;
  }

  // fonction appelée quand on change l'input
  updateNb(){
    let nb = this.contenu.nb_etud - this. lastNb;
    this.lastNb = this.contenu.nb_etud;
    this.newNb.emit(nb);
  }

}
