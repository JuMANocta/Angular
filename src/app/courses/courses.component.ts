import { Component, OnInit } from '@angular/core';
import { Course } from '../course/course'; // import interface

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  titre : string = "liste des cours";
  ma_valeur : string = "valeur initiale";
  constructor() { }

  ngOnInit(): void {
  }

  getTitre() : string {
    return this.titre;
  }

  modifTitre() : void {
    this.titre = 'nouveau titre';
  }

}
